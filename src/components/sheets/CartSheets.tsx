"use client";
import React, { FC } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

type Props = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
const CartSheets: FC<Props> = ({ open, setOpen }) => {
  return (
    <Sheet onOpenChange={setOpen} open={open} key={"right"}>
      <SheetTrigger>
        <li className="rounded-full h-10 w-10 inline-flex items-center justify-center relative">
          <div className="w-10 cursor-pointer h-10 relative flex items-center justify-center rounded-full ">
            <ShoppingCart size={24} />
            <span className="px-1 text-xs font-semibold text-white rounded-full bg-main absolute -top-1 -right-1">
              9+
            </span>
          </div>
        </li>
      </SheetTrigger>
      <SheetContent className="w-full res5:w-[400px]">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheets;
