"use client";
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";

const ShopFilterSection = () => {
  const items = ["item-1", "item-2", "item-3"];
  const [openItems, setOpenItems] = useState<string[]>([]);

  useEffect(() => {
    setOpenItems(items);
  }, []);

  return (
    <Accordion
      type="multiple"
      value={openItems}
      onValueChange={setOpenItems}
      className="space-y-2"
    >
      <AccordionItem
        value="item-1"
        className="rounded px-3 py-0 border bg-white border-border"
      >
        <AccordionTrigger className="hover:no-underline">
          Categories
        </AccordionTrigger>
        <AccordionContent>
          <div className="overflow-y-auto max-h-[200px]">
            <div className="space-y-3   ">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" />
                <label
                  htmlFor="terms2"
                  className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Apple
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="walton" />
                <label
                  htmlFor="walton"
                  className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Walton
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="pran" />
                <label
                  htmlFor="pran"
                  className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Pran
                </label>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="rounded px-3 py-0 border bg-white border-border"
      >
        <AccordionTrigger className="hover:no-underline">
          Brands
        </AccordionTrigger>
        <AccordionContent>
          <div className="overflow-y-auto max-h-[200px]">
            <div className="space-y-3   ">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" />
                <label
                  htmlFor="terms2"
                  className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Apple
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="walton" />
                <label
                  htmlFor="walton"
                  className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Walton
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="pran" />
                <label
                  htmlFor="pran"
                  className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Pran
                </label>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        defaultChecked={true}
        className="rounded px-3 py-0 border bg-white border-border"
      >
        <AccordionTrigger className="hover:no-underline">
          Product Status
        </AccordionTrigger>
        <AccordionContent>
          <div className="overflow-y-auto max-h-[200px]">
            <div className="space-y-3 px-3  ">
              <div className="flex items-center space-x-2">
                <Checkbox id="inStock" />
                <label
                  htmlFor="inStock"
                  className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  In Stock
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="onSale" />
                <label
                  htmlFor="onSale"
                  className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  On Sale
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="homeDelivery" />
                <label
                  htmlFor="homeDelivery"
                  className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Home Delivery
                </label>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        defaultChecked={true}
        className="rounded px-3 py-0 border bg-white border-border"
      >
        <AccordionTrigger className="hover:no-underline">
          Rating
        </AccordionTrigger>
        <AccordionContent>
          <div className="h-[125px]">
            <div className="space-y-3  ">
              <div className="flex items-center space-x-2">
                <Checkbox id="five" />
                <label
                  htmlFor="five"
                  className="text-sm flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="four" />
                <label
                  htmlFor="four"
                  className="text-sm flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="three" />
                <label
                  htmlFor="three"
                  className="text-sm flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="two" />
                <label
                  htmlFor="two"
                  className="text-sm flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <Star size={16} />
                  <Star size={16} />
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="one" />
                <label
                  htmlFor="one"
                  className="text-sm flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <Star size={16} />
                </label>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ShopFilterSection;
