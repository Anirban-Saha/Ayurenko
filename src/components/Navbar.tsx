import { BsGithub } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import Link from "next/link";
import { ModeToggle } from "../components/ui/toggle-mode";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar({}): any {
  return (
    <nav
      className="dark:text-white w-full bg-gray fixed h-24 flex justify-evenly
      items-center py-10 pr-4 pl-1 md:px-8 lg:px-12 xl:px-1 2xl:pr-24 2xl:pl-7 "
    >
      <Link href="/" passHref>
        <div className="flex items-center">
          <Image
            alt="logo"
            className="cursor-pointer w-15 rounded-full "
            src="./images/logo.svg"
            height={0}
            width={100}
          />
          <span className="ml-2 text-xl font-semibold">A Y U R E N K O</span>
        </div>
      </Link>

      <div className="hidden md:flex gap-1 md:gap-2 lg:gap-4 ml-auto">
        {/* HOME BUTTON: changed the respective mode change colour */}
        <Link href="/" passHref  >
          <Button
            variant="ghost"
            className="font-semibold text-md transition-all duration-500 ease-in-out dark:hover:text-white dark:hover:bg-gray-800 hover:bg-opacity-20"
          >
            Home
          </Button>
        </Link>
        <Link href="/Documentation" passHref>
          <Button
            variant="ghost"
            className="font-semibold text-md transition-all duration-500 ease-in-out  dark:hover:text-white dark:hover:bg-gray-800 hover:bg-opacity-20 mr-10"
          >
            Documentation
          </Button>
        </Link>
      </div>
      <Link href="https://github.com/Anirban-Saha/Ayurenko.git" target="_blank">
        <Button
          variant="default"
          className="rounded-full w-fit bg-purple-200 text-black  gap-2 items-center hidden md:flex transition-all hover:text-white duration-500 ease-in-out dark:hover:bg-gray-300 hover:bg-opacity-20 dark:hover:text-black"
          size="lg"
        >
          <span>Github </span>
          <span className="text-xl ml-1">
            <BsGithub />
          </span>
        </Button>
      </Link>
      <div className=" pl-4 pt-4 pb-4">
        <ModeToggle />
      </div>

      {/* MOBILE NAV */}
      <Sheet>
        <SheetTrigger className="block md:hidden p-3">
          <span className="text-2xl">
            <GrMenu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="w-full space-y-3">
                <Link href="/">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full transition-all duration-500 ease-in-out text-black dark:text-white hover:bg-slate-400 hover:bg-opacity-20"
                  >
                    Home
                  </Button>
                </Link>
               
                <Link href="/Documentation">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full transition-all duration-500 ease-in-out  text-black dark:text-white hover:bg-slate-400 hover:bg-opacity-20"
                  >
                    Documentation
                  </Button>
                </Link>
                <div className=" pl-4 pt-4 pb-4">
                  <ModeToggle />
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
