"use client";
import React, { FC } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search } from "lucide-react";

import Logo from "../shared/Logo";

type Props = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileSearchSeet: FC<Props> = ({ open, setOpen }) => {
  return (
    <Sheet onOpenChange={setOpen} open={open} key={"left"}>
      <SheetTrigger>
        <li className=" md:hidden rounded-full h-10 w-10 inline-flex items-center justify-center relative">
          <div className="w-10 cursor-pointer h-10 relative flex items-center justify-center rounded-full ">
            <Search size={24} className="text-gray-600" />
          </div>
        </li>
      </SheetTrigger>
      <SheetContent className="w-full  px-0 py-0 res4:w-[400px]" side={"left"}>
        <div className="flex flex-col h-full">
          <div>
            <div className="h-[50px]  px-3 flex gap-1 items-center bg-gray-200">
              <Logo />
            </div>
          </div>
          <div className="flex-grow px-3 py-2 h-[calc(100vh-100px)] overflow-y-auto">
            <div>Search Products</div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSearchSeet;
