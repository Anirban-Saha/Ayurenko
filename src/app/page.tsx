import "../app/global.css";
import { ModeToggle } from "../components/ui/toggle-mode";
import { Chat } from "../components/chat";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* <div className="p-4 items-center justify-between flex sticky  border-2 shadow-md bg-background dark:bg-yellow-600 rounded-xl mx-10 mt-3">
        <span className="text-lg font-bold pl-5 pt-4 pb-4 font-poppins dark:text-slate-950">
          D O C T O I D{" "}
        </span>
        <div className=" pl-4 pt-4 pb-4">
          <ModeToggle />
        </div>
      </div> */}
      <div className="">
        <Chat />
      </div>
    </div>
  );
}
