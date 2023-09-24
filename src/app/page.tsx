import "../app/global.css";
import { ModeToggle } from "../components/ui/toggle-mode";
import { Chat } from "../components/chat";

export default function Home() {
  return (
    <div className=" w-full ">
      <div className="p-4 items-center justify-between flex sticky  border-2 shadow-md bg-background dark:bg-yellow-600 rounded-xl mx-10 mt-3">
        <span className="text-lg font-semibold pl-5 pt-4 pb-4 font-poppins dark:text-slate-900">
          A Y U R E N K O{" "}
        </span>
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
