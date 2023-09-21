import "../app/global.css";
import { ModeToggle } from "../components/ui/toggle-mode";
import { Chat } from "../components/chat";

export default function Home() {
  return (
    <div className=" w-full">
      <div className="p-4 items-center justify-center flex sticky  border-2 shadow-md bg-background dark:bg-gray-800 rounded-xl mx-10 mt-3">
        <span className="text-lg font-semibold pl-9 pt-4 pb-4">A Y U R E N K O 🌿</span>
        <div className=" pl-4 pt-4 pb-4">
          <ModeToggle />
        </div>
      </div>
      <div className="">
        <Chat />
      </div>
    </div>
  );
}
