import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formattedText(inputText: string) {
  return inputText
    .replace(/\n+/g, " ")
    .replace(/(\w) - (\w)/g, "$1$2")
    .replace(/\s+/g, " ");
}
