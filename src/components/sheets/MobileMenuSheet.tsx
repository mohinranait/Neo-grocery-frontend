"use client";
import React, { FC } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Logo from "../shared/Logo";

type Props = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileMenuSheet: FC<Props> = ({ open, setOpen }) => {
  return (
    <Sheet onOpenChange={setOpen} open={open} key={"left"}>
      <SheetTrigger>
        <li className="py-3 inline-flex items-center justify-center flex-col px-2">
          <Menu size={16} className="text-gray-500 w-5 h-5" />
          <p className="text-xs text-gray-500">Menu</p>
        </li>
      </SheetTrigger>
      <SheetContent className="w-full  px-0 py-0 res4:w-[400px]" side={"left"}>
        <div className="flex flex-col h-full">
          <div>
            <div className="h-[50px]  px-3 flex gap-1 items-center bg-gray-200">
              <Logo />
            </div>
          </div>
          <div className="flex-grow px-3 py-2 h-[calc(100vh-170px)] overflow-y-auto">
            <Tabs defaultValue="categories" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="categories" className="w-full">
                  Categories
                </TabsTrigger>
                <TabsTrigger value="menu" className="w-full">
                  Menus
                </TabsTrigger>
              </TabsList>
              <TabsContent value="categories">
                <div>
                  <Accordion className="w-full" type="single" collapsible>
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="py-1 hover:no-underline">
                        <Link href={"/"} className="text-sm">
                          Furnitures
                        </Link>
                      </AccordionTrigger>
                      <AccordionContent className="pb-0">
                        <div>
                          <Accordion
                            className="w-full mb-0 pl-3 pb-0"
                            type="single"
                            collapsible
                          >
                            <AccordionItem value="item-1" className="border-0">
                              <AccordionTrigger className="py-1 hover:no-underline">
                                <Link href={"/"} className="text-sm">
                                  Chare
                                </Link>
                              </AccordionTrigger>
                              <AccordionContent className="pb-0">
                                <div className="pl-3">
                                  <Link href={"/"} className="block py-1">
                                    Plastic
                                  </Link>
                                  <Link href={"/"} className="block py-1">
                                    Tree
                                  </Link>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-0">
                              <AccordionTrigger className="py-1 hover:no-underline">
                                Table
                              </AccordionTrigger>
                              <AccordionContent className="pb-0">
                                Yes. It adheres to the WAI-ARIA design pattern.
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-0">
                      <AccordionTrigger className="py-1 hover:no-underline">
                        Sharts
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
              <TabsContent value="menu">
                <div className="">
                  <Link href={"/"} className="block text-sm py-1">
                    Shopping Cart
                  </Link>
                  <Link href={"/"} className="block text-sm py-1">
                    Offers
                  </Link>
                  <Link href={"/"} className="block text-sm py-1">
                    About
                  </Link>
                  <Link href={"/"} className="block text-sm py-1">
                    Contact
                  </Link>
                </div>
              </TabsContent>
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
