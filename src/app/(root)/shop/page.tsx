"use client";
import ProductCard from "@/components/shared/ProductCard";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Grid, List, Star } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ShopPage = () => {
  const items = ["item-1", "item-2", "item-3"];
  const [openItems, setOpenItems] = useState<string[]>([]);

  useEffect(() => {
    setOpenItems(items);
  }, []);

  return (
    <section>
      <div className="container px-2 md:px-0">
        <Breadcrumb className="py-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="container px-2 md:px-0  flex gap-3">
        <div className="hidden md:block">
          <div className="w-[280px]   h-full">
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
          </div>
        </div>
        <div className=" flex-grow space-y-4">
          <div className="h-[140px] bg-red-100 flex items-center justify-center">
            Banner Part
          </div>
          <div className="py-3 px-3 flex items-center justify-between rounded shadow">
            <p className="text-gray-600 text-sm">Showing all 5 results</p>
            <div className="flex">
              <select name="" className="text-sm text-gray-600" id="">
                <option value="">Filter</option>
                <option value="">Price Low to High</option>
                <option value="">Price High to Low</option>
                <option value="">Z-A</option>
                <option value="">Z-A</option>
              </select>
              <span className="h-[30px] w-[30px] cursor-pointer flex items-center justify-center">
                <List size={20} />
              </span>
              <span className="h-[30px] w-[30px] cursor-pointer flex items-center justify-center">
                <Grid size={20} />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
