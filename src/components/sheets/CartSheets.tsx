"use client";
import React, { FC } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Minus,
  Plus,
  ShoppingBagIcon,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

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
      <SheetContent className="w-full px-0 py-0 res4:w-[400px]">
        <div className="flex flex-col h-full">
          <div>
            <div className="h-[50px]  px-3 flex gap-1 items-center bg-gray-200">
              <ShoppingBagIcon size={18} />
              <p className="text-sm">
                Shipping Cart{" "}
                <span className="text-xs text-gray-500">(4 Items)</span>
              </p>
            </div>
          </div>
          <div className="flex-grow h-[calc(100vh-170px)] overflow-y-auto">
            <ul className="">
              <li className="flex hover:bg-gray-50 py-3  px-3 items-center">
                <div>
                  <div className="relative w-[100px]">
                    <span className="absolute cursor-pointer flex items-center justify-center -top-1 -left-1 h-6 w-6 bg-white rounded-full shadow">
                      <Trash2 className="text-red-500" size={14} />
                    </span>
                    <Image
                      src={"/product-image-45-346x310.jpg"}
                      width={100}
                      height={100}
                      alt="Image"
                      className="w-[100px] h-100px"
                    />
                  </div>
                </div>
                <div>
                  <Link
                    href={"/"}
                    className="block text-sm relative  text-black"
                  >
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                  </Link>
                  <p className="text-xs my-[2px] text-gray-600">
                    Product Price: 100$
                  </p>
                  <div className="flex justify-between">
                    <div className="border border-border items-center rounded flex">
                      <span className="px-[6px] py-[3px] cursor-pointer">
                        <Minus size={15} />
                      </span>
                      <span className="px-[6px] py-[3px] text-sm">2</span>
                      <span className="px-[6px] py-[3px] cursor-pointer">
                        <Plus size={15} />
                      </span>
                    </div>
                    <span className="text-sm text-black">45$</span>
                  </div>
                </div>
              </li>
              <li className="flex hover:bg-gray-50 py-3  px-3 items-center">
                <div>
                  <div className="relative w-[100px]">
                    <span className="absolute cursor-pointer flex items-center justify-center -top-1 -left-1 h-6 w-6 bg-white rounded-full shadow">
                      <Trash2 className="text-red-500" size={14} />
                    </span>
                    <Image
                      src={"/prod-2.webp"}
                      width={100}
                      height={100}
                      alt="Image"
                      className="w-[100px] h-100px"
                    />
                  </div>
                </div>
                <div>
                  <Link
                    href={"/"}
                    className="block text-sm relative  text-black"
                  >
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                  </Link>
                  <p className="text-xs my-[2px] text-gray-600">
                    Product Price: 100$
                  </p>
                  <div className="flex justify-between">
                    <div className="border border-border items-center rounded flex">
                      <span className="px-[6px] py-[3px] cursor-pointer">
                        <Minus size={15} />
                      </span>
                      <span className="px-[6px] py-[3px] text-sm">2</span>
                      <span className="px-[6px] py-[3px] cursor-pointer">
                        <Plus size={15} />
                      </span>
                    </div>
                    <span className="text-sm text-black">45$</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="px-3 py-3 border-t border-border">
            <div className="h-[86px]">
              <div className="flex items-center justify-between">
                <p className="text-gray-800">Sub Total</p>
                <p className="text-primary">100$</p>
              </div>
              <div className="flex gap-2 mt-3">
                <Button className="w-full">Cart </Button>
                <Button className="w-full">Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheets;
