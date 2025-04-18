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

import ShopFilterSection from "@/components/pages/shop/ShopFilterSection";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { addSortingProducts } from "@/redux/features/productSlice";

const ShopPage = () => {
  const dispatch = useAppDispatch();
  const [isLoadMore, setIsLoadMore] = React.useState(1);
  const totalShow = 12;
  const { filterProducts } = useAppSelector((state) => state.product);
  return (
    <section className="mb-10">
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
          <div className="res5:h-[200px] overflow-hidden bg-red-100 flex items-center justify-center">
            <Image
              src={"/promotion.jpg"}
              width={800}
              height={200}
              alt="Promo"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="py-3 bg-white px-3 flex items-center justify-between rounded shadow">
            <p className="text-gray-600 text-sm">
              Showing all {filterProducts?.length} results
            </p>
            <div className="flex">
              <select
                onChange={(e) => {
                  dispatch(
                    addSortingProducts({
                      filter: e.target.value as "phl" | "plh" | "az" | "za",
                    })
                  );
                }}
                className="text-sm text-gray-600"
                id=""
              >
                <option value="">Filter</option>
                <option value="plh">Price Low to High</option>
                <option value="phl">Price High to Low</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
            {filterProducts?.length === 0 && (
              <div className="text-center text-gray-600 text-sm col-span-5 py-4">
                Product not found for your request
              </div>
            )}
            {[...filterProducts]
              ?.slice(0, isLoadMore * totalShow)
              ?.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
          </div>
          {filterProducts?.length > isLoadMore * totalShow && (
            <div className="flex items-center justify-center py-4">
              <Button
                onClick={() => setIsLoadMore((prev) => prev + 1)}
                className="btn btn-primary"
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
