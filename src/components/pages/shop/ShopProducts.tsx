"use client";
import ProductCard from "@/components/shared/ProductCard";
import { TProduct } from "@/types/product.type";
import React from "react";
import FilterCharecter from "./FilterCharecter";

type Props = {
  products: TProduct[];
};
const ShopProducts = ({ products }: Props) => {
  return (
    <div className=" flex-grow space-y-4">
      <div className="py-3 bg-white px-3 flex items-center justify-between rounded shadow">
        <p className="text-gray-600 text-sm">
          Showing all {products?.length} results
        </p>
        <div className="flex">
          <FilterCharecter />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
        {products?.length === 0 && (
          <div className="text-center text-gray-600 text-sm col-span-5 py-4">
            Product not found for your request
          </div>
        )}
        {products?.map((product: TProduct, index: number) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShopProducts;
