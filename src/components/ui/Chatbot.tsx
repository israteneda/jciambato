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
  const [isAnimating, setIsAnimating] = useState(false);
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
    if (isAnimating) return;

    setIsAnimating(true);
    if (isOpen) {
      // Closing animation
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 200);
    } else {
      // Opening animation
      setIsOpen(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
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

      <div className={`fixed bottom-3 right-3 z-[9999] ${className}`}>
        {/* Chat Window */}
        <div
          className={`absolute bottom-16 right-0 transform transition-all duration-300 ease-in-out ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-4 scale-95 opacity-0"
          }`}
        >
          <Card className="h-96 w-80 border-0 bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-lg bg-gradient-to-r from-jci-navy to-jci-teal p-4 text-white">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <BsRobot className="h-5 w-5 text-jci-navy" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Junior Bot</h3>
                  <p className="text-xs opacity-90">En línea</p>
                </div>
              </div>
              <Button
                isIconOnly
                variant="light"
                className="text-white transition-all duration-200 hover:bg-white/10"
                onPress={toggleChat}
              >
                <IoIosClose className="h-6 w-6" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`animate-in slide-in-from-bottom-2 flex items-start gap-2 duration-300 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-jci-teal">
                      <BsRobot className="h-3 w-3 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] rounded-lg p-3 text-sm transition-all duration-200 ${
                      message.sender === "user"
                        ? "rounded-br-none bg-jci-navy text-white"
                        : "rounded-bl-none border bg-white text-gray-800"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <p
                      className={`mt-1 text-xs opacity-70 ${
                        message.sender === "user" ? "text-gray-200" : "text-gray-500"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                  {message.sender === "user" && (
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-jci-yellow">
                      <HiUser className="h-3 w-3 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="animate-in slide-in-from-bottom-2 flex items-start gap-2 duration-300">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-jci-teal">
                    <BsRobot className="h-3 w-3 text-white" />
                  </div>
                  <div className="max-w-[70%] rounded-lg rounded-bl-none border bg-white p-3 text-gray-800">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-jci-teal"></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-jci-teal"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-jci-teal"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="rounded-b-lg border-t bg-white p-4">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 transition-all duration-200 focus:ring-2 focus:ring-jci-teal"
                  size="sm"
                  disabled={isLoading}
                />
                <Button
                  onPress={sendMessage}
                  isIconOnly
                  className="bg-jci-teal text-white transition-all duration-200 hover:scale-105 hover:bg-jci-navy active:scale-95"
                  disabled={isLoading || !inputMessage.trim()}
                  size="sm"
                >
                  <IoIosSend className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Toggle Button */}
        <Button
          onPress={toggleChat}
          className={`h-14 w-14 transform rounded-full bg-gradient-to-r from-jci-navy to-jci-teal text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          isIconOnly
        >
          {isOpen ? (
            <IoIosClose className="h-6 w-6 transition-transform duration-300" />
          ) : (
            <IoChatbubbleOutline className="h-6 w-6 transition-transform duration-300" />
          )}
        </Button>
      </div>
    </>
  );
}
