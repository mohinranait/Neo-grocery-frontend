"use client";
import ProductCard from "@/components/shared/ProductCard";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Grid, List } from "lucide-react";

import ShopFilterSection from "@/components/pages/shop/ShopFilterSection";
import { useAppSelector } from "@/hooks/useRedux";

const ShopPage = () => {
  const { products } = useAppSelector((state) => state.product);
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
            <ShopFilterSection />
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
            {products?.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
