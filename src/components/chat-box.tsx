import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Balancer } from "react-wrap-balancer";
import { Message } from "ai/react";
import ReactMarkdown from "react-markdown";
import { Interface } from "readline";
import { formattedText } from "@/lib/utils";

const wrappedText = (text: string) => {
  return text.split("\n").map((line, i) => {

    if (line.startsWith("**") && line.endsWith("*8")) {
      const boldText = line.slice(2, -2); 
      return (
        <span key={i}>
          <strong>{boldText}</strong>
          <br />
        </span>
      );
    } else {
      return (
        <span key={i}>
          {line}
          <br />
        </span>
      );
    }
  });
};


interface ChatBubbleProps extends Partial<Message> {
  sources: string[];
}

export function ChatBubble({
  role = "assistant",
  content,
  sources,
}: ChatBubbleProps) {
  if (content == null) {
    return null;
  }
  const wrappedMessage = wrappedText(content);
  return (
    <div>
      <Card className="mb-2 "></Card>
      <CardHeader>
        <CardTitle
          className={
            role != "assistant"
              ? "text-green-500 dark:text-green-500 font-bold "
              : "text-amber-500 dark:text-amber-500  font-bold"
          }
        >
          {role == "assistant" ? "Dr.Ayur  ⚕" : "You"}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-xl ">
        <Balancer>{wrappedMessage}</Balancer>
      </CardContent>
    </div>
  );
}
