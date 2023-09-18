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
} from "@/components/ui/accordion";
import { Balancer } from "react-wrap-balancer";
import { Message } from "ai/react";
import ReactMarkdown from "react-markdown";
import { Interface } from "readline";
import { formattedText } from "@/lib/utils";

const wrappedText = (text: string) => {
  return text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));
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
      <Card className="mb-2"></Card>
      <CardHeader>
        <CardTitle
          className={
            role != "assistant"
              ? "text-green-500 dark:text-amber-500"
              : "text-amber-500 dark:text-green-500"
          }
        >
          {role == "assistant" ? "Dr.Ayur  ⚕" : "You"}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-lg">
        <Balancer>{wrappedMessage}</Balancer>
      </CardContent>
      <CardFooter>
        <CardDescription className="w-full">
          {sources && sources.length ? (
            <Accordion type="single" collapsible className="w-[180vh]">
              {sources.map((source, index) => (
                <AccordionItem value={`source-${index}`} key={index}>
                  <AccordionTrigger>{`Source ${index + 1}`}</AccordionTrigger>
                  <AccordionContent>
                    <ReactMarkdown linkTarget="_blank">
                      {formattedText(source)}
                    </ReactMarkdown>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <></>
          )}
        </CardDescription>
      </CardFooter>
    </div>
  );
}
