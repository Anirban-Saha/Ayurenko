"use client";

import { scrollToBottom, initialMessages, getSources } from "../lib/utils";
import { ChatBubble } from "./chat-box";
import { useChat, Message } from "ai/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";
import { useEffect, useRef } from "react";

export function Chat() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading, data } =
    useChat({
      initialMessages,
    });

  useEffect(() => {
    setTimeout(() => scrollToBottom(containerRef), 100);
  }, [messages]);

  return (
    <div className=" h-screen  pt-20 flex flex-col justify-between ">
      <div className="p-6 overflow-auto font-normal" ref={containerRef}>
        {messages.map(({ id, role, content }: Message, index) => (
          <ChatBubble
            key={id}
            role={role}
            content={content}
            sources={data?.length ? getSources(data, role, index) : []}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-5 flex clear-both ">
        <Input
          value={input}
          placeholder={"Talk to Dr. Ayur!"}
          onChange={handleInputChange}
          className="mr-2 h-15 p-4 border-e-inherit hover:border-red-400 hover:border-opacity-50 transition-all duration-300 ease-in-out font-medium text-base bg-none"
        />

        <Button type="submit" className="w-24 h-15 bg-gray-800 dark:bg-white dark:text-rose-800">
          {isLoading ? <Spinner /> : "GO"}
        </Button>
      </form>
    </div>
  );
}
