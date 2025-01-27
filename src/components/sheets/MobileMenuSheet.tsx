"use client";
import React, { FC } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingBagIcon } from "lucide-react";
import { Button } from "../ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileMenuSheet: FC<Props> = ({ open, setOpen }) => {
  return (
    <Sheet onOpenChange={setOpen} open={open} key={"left"}>
      <SheetTrigger>
        <Menu size={20} />
      </SheetTrigger>
      <SheetContent className="w-full  px-0 py-0 res5:w-[400px]" side={"left"}>
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
            <Tabs defaultValue="categories" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="categories" className="w-full">
                  Categories
                </TabsTrigger>
                <TabsTrigger value="menu" className="w-full">
                  Menus
                </TabsTrigger>
              </TabsList>
              <TabsContent value="categories">Categories</TabsContent>
              <TabsContent value="menu">menus</TabsContent>
            </Tabs>
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

export default MobileMenuSheet;
