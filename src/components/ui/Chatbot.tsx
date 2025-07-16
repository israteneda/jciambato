"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Card } from "@heroui/card";
import { IoIosSend, IoIosClose } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsRobot } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import LaunchCountdown from "./LaunchCountdown";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatbotProps {
  className?: string;
}

// Client-side only ID generation to prevent hydration mismatches
let messageIdCounter = 0;
const generateMessageId = () =>
  `msg-${++messageIdCounter}-${Math.random().toString(36).substr(2, 9)}`;

export default function Chatbot({ className }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showLaunchCountdown, setShowLaunchCountdown] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Ensure component is mounted before any client-side operations
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scroll to bottom when messages change
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Initialize chat with welcome message - only after mounting
  useEffect(() => {
    if (isMounted && isOpen && !isInitialized) {
      const welcomeMessage: Message = {
        id: "welcome",
        content:
          "¡Hola! 👋 Soy Junior Bot de JCI Ambato. Te puedo ayudar con información sobre nuestros proyectos, áreas de oportunidad, historia y cómo puedes involucrarte en nuestra organización. ¿En qué te puedo ayudar?",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
      setIsInitialized(true);
    }
  }, [isMounted, isOpen, isInitialized]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading || !isMounted) return;

    const userMessage: Message = {
      id: generateMessageId(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Prepare conversation history for API
      const conversationHistory = messages.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputMessage,
          conversationHistory,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje");
      }

      const data = await response.json();

      // Verificar si hay una acción especial
      if (data.action === "launch_website") {
        setShowLaunchCountdown(true);
      }

      const botMessage: Message = {
        id: generateMessageId(),
        content: data.response,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: generateMessageId(),
        content: "Lo siento, ocurrió un error al procesar tu mensaje. Por favor, intenta de nuevo.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleLaunchComplete = () => {
    setShowLaunchCountdown(false);
    // Agregar mensaje de éxito después del lanzamiento
    const launchCompleteMessage: Message = {
      id: generateMessageId(),
      content:
        "🎉 ¡Lanzamiento completado exitosamente! Bienvenido a la nueva experiencia de JCI Ambato. ¿Te gustaría conocer más sobre nuestros proyectos y cómo puedes participar?",
      sender: "bot",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, launchCompleteMessage]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Componente de cuenta regresiva */}
      {showLaunchCountdown && <LaunchCountdown onComplete={handleLaunchComplete} />}

      <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
        {/* Chat Window */}
        {isOpen && (
          <Card className="w-80 h-96 mb-4 shadow-2xl border-0 bg-white">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-jci-navy to-jci-aqua text-white rounded-t-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <BsRobot className="w-5 h-5 text-jci-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Junior Bot</h3>
                  <p className="text-xs opacity-90">En línea</p>
                </div>
              </div>
              <Button
                isIconOnly
                variant="light"
                className="text-white hover:bg-white/10"
                onPress={toggleChat}
              >
                <IoIosClose className="w-6 h-6" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-2 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <div className="w-6 h-6 bg-jci-aqua rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <BsRobot className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-lg text-sm ${
                      message.sender === "user"
                        ? "bg-jci-navy text-white rounded-br-none"
                        : "bg-white text-gray-800 rounded-bl-none border"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <p
                      className={`text-xs mt-1 opacity-70 ${
                        message.sender === "user" ? "text-gray-200" : "text-gray-500"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                  {message.sender === "user" && (
                    <div className="w-6 h-6 bg-jci-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <HiUser className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-jci-aqua rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BsRobot className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-white text-gray-800 rounded-lg rounded-bl-none border p-3 max-w-[70%]">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-jci-aqua rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-jci-aqua rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-jci-aqua rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white rounded-b-lg">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1"
                  size="sm"
                  disabled={isLoading}
                />
                <Button
                  onPress={sendMessage}
                  isIconOnly
                  className="bg-jci-aqua text-white hover:bg-jci-navy"
                  disabled={isLoading || !inputMessage.trim()}
                  size="sm"
                >
                  <IoIosSend className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Toggle Button */}
        <Button
          onClick={toggleChat}
          className={`w-14 h-14 rounded-full bg-gradient-to-r from-jci-navy to-jci-aqua text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          isIconOnly
        >
          {isOpen ? (
            <IoIosClose className="w-6 h-6" />
          ) : (
            <IoChatbubbleOutline className="w-6 h-6" />
          )}
        </Button>
      </div>
    </>
  );
}
