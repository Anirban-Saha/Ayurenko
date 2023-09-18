import { ChatBubble } from "./chat-box";
import { Message } from "ai/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";


export function Chat() {
  const messages: Message[] = [
    { role: "assistant", content: "hey I am your AI", id: "1" },
    { role: "user", content: "Hey i am user", id: "2" },
  ];

  const sources = ["I am sources one", "I am source 2"];
  return (
    <div className="rounded-xl  h-[90vh] flex flex-col justify-between ">
      <div className="p-6 overflow-auto">
        {messages.map(({ id, role, content }: Message, index) => (
          <ChatBubble
            key={id}
            role={role}
            content={content}
            sources={role !== "assistant" ? [] : sources}
          />
        ))}
      </div>
      <form className="p-4 flex clear-both mb-4">
        <Input placeholder={"Talk to Dr.Ayur"} className="mr-2 " />

        <Button type="submit" className="w-24">
          ASK
        </Button>
      </form>
    </div>
  );
}
