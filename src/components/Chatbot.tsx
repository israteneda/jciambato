"use client";

import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { ArrowUpIcon, MessageCircleDashedIcon, RotateCwIcon } from "lucide-react";
import { BsRobot } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import LaunchCountdown from "@/components/LaunchCountdown";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Marker, MarkerContent } from "@/components/ui/marker";
import { Message, MessageAvatar, MessageContent, MessageFooter } from "@/components/ui/message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";

interface ChatMessage {
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

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  content:
    "¡Hola! 👋 Soy Junior Bot de JCI Ambato. Te puedo ayudar con información sobre nuestros proyectos, áreas de oportunidad, historia y cómo puedes involucrarte en nuestra organización. ¿En qué te puedo ayudar?",
  sender: "bot",
  timestamp: new Date(),
};

export default function Chatbot({ className }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showLaunchCountdown, setShowLaunchCountdown] = useState(false);

  const isBusy = isLoading;

  const sendMessage = async () => {
    if (!inputValue.trim() || isBusy) return;

    const userMessage: ChatMessage = {
      id: generateMessageId(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const conversationHistory = messages.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: inputValue,
          conversationHistory,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje");
      }

      const data = await response.json();

      if (data.action === "launch_website") {
        setShowLaunchCountdown(true);
      }

      const botMessage: ChatMessage = {
        id: generateMessageId(),
        content: data.response,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: ChatMessage = {
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

  const handleReset = () => {
    setMessages([]);
    setInputValue("");
    setIsLoading(false);
  };

  const handleLaunchComplete = () => {
    setShowLaunchCountdown(false);
    const launchCompleteMessage: ChatMessage = {
      id: generateMessageId(),
      content:
        "🎉 ¡Lanzamiento completado exitosamente! Bienvenido a la nueva experiencia de JCI Ambato. ¿Te gustaría conocer más sobre nuestros proyectos y cómo puedes participar?",
      sender: "bot",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, launchCompleteMessage]);
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const renderMessage = (message: ChatMessage, index: number) => {
    const isUser = message.sender === "user";
    const isLast = index === messages.length - 1;

    return (
      <MessageScrollerItem
        key={message.id}
        messageId={message.id}
        scrollAnchor={isUser || (message.sender === "bot" && isLast)}
      >
        <Message align={isUser ? "end" : "start"}>
          <MessageAvatar>
            <div
              className={`flex size-7 items-center justify-center rounded-full ${
                isUser ? "bg-jci-yellow" : "bg-jci-teal"
              }`}
            >
              {isUser ? (
                <HiUser className="size-3.5 text-white" />
              ) : (
                <BsRobot className="size-3.5 text-white" />
              )}
            </div>
          </MessageAvatar>
          <MessageContent>
            <Bubble variant={isUser ? "default" : "muted"} align={isUser ? "end" : "start"}>
              <BubbleContent>{message.content}</BubbleContent>
            </Bubble>
            <MessageFooter>
              {formatTime(message.timestamp)}
              {isUser && " · Delivered"}
            </MessageFooter>
          </MessageContent>
        </Message>
      </MessageScrollerItem>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add welcome message on first interaction if chat is empty
    if (messages.length === 0) {
      setMessages([WELCOME_MESSAGE]);
    }
    sendMessage();
  };

  return (
    <>
      {showLaunchCountdown && <LaunchCountdown onComplete={handleLaunchComplete} />}

      <div className={`fixed right-3 bottom-3 z-9999 ${className}`}>
        {/* Chat window */}
        <div
          className={`absolute right-0 bottom-16 w-80 transition-all duration-300 ease-in-out ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-4 scale-95 opacity-0"
          }`}
        >
          <MessageScrollerProvider>
            {/*  */}
            {/* h-140 max-h-[75vh] gap-0 shadow-2xl */}
            <Card className="mx-auto h-140 w-auto max-w-sm gap-0">
              {/* ─── Header ─── */}
              <CardHeader className="gap-1 border-b">
                <CardTitle className="font-semibold">Junior Bot</CardTitle>
                <CardDescription className="text-xs">En línea</CardDescription>
                <CardAction className="ml-auto flex gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Reiniciar conversación"
                    title="Reiniciar"
                    onClick={handleReset}
                    disabled={isBusy}
                  >
                    <RotateCwIcon />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Cerrar"
                    onClick={() => setIsOpen(false)}
                  >
                    <IoIosClose className="size-5" />
                  </Button>
                </CardAction>
              </CardHeader>

              {/* ─── Messages ─── */}
              <CardContent className="flex min-h-0 flex-1 overflow-hidden p-0">
                {messages.length === 0 && !isBusy ? (
                  <Empty className="h-full">
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <MessageCircleDashedIcon />
                      </EmptyMedia>
                      <EmptyTitle>Junior Bot</EmptyTitle>
                      <EmptyDescription>
                        ¡Pregúntame lo que quieras! Estoy aquí para ayudarte con información sobre
                        JCI Ambato.
                      </EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                ) : (
                  <MessageScroller>
                    <MessageScrollerViewport>
                      <MessageScrollerContent aria-busy={isBusy} className="p-(--card-spacing)">
                        {messages.map((message, index) => renderMessage(message, index))}

                        {/* Loading indicator */}
                        {isLoading && (
                          <MessageScrollerItem messageId="loading" scrollAnchor>
                            <Message align="start">
                              <MessageAvatar>
                                <div className="bg-jci-teal flex size-7 items-center justify-center rounded-full">
                                  <BsRobot className="size-3.5 text-white" />
                                </div>
                              </MessageAvatar>
                              <MessageContent>
                                <Marker role="status">
                                  <MarkerContent className="shimmer">Escribiendo...</MarkerContent>
                                </Marker>
                              </MessageContent>
                            </Message>
                          </MessageScrollerItem>
                        )}
                      </MessageScrollerContent>
                    </MessageScrollerViewport>
                    <MessageScrollerButton />
                  </MessageScroller>
                )}
              </CardContent>

              {/* ─── Footer / Input ─── */}
              <CardFooter className="flex-col gap-2">
                <form onSubmit={handleSubmit} className="w-full">
                  <InputGroup>
                    <InputGroupInput
                      placeholder="Escribe tu mensaje..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      disabled={isBusy}
                    />
                    <InputGroupAddon align="block-end" className="pt-1">
                      <InputGroupButton
                        type="submit"
                        variant="default"
                        size="icon-sm"
                        disabled={isBusy || !inputValue.trim()}
                        className="bg-jci-blue hover:bg-jci-navy ml-auto text-white"
                      >
                        <ArrowUpIcon />
                        <span className="sr-only">Enviar</span>
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                </form>
              </CardFooter>
            </Card>
          </MessageScrollerProvider>
        </div>

        {/* Toggle button */}
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`from-jci-navy to-jci-blue h-14 w-14 rounded-full bg-linear-to-r text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          size="icon"
        >
          {isOpen ? (
            <IoIosClose className="size-6 transition-transform duration-300" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6 transition-transform duration-300"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </Button>
      </div>
    </>
  );
}
