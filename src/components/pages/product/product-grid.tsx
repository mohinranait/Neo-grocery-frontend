"use client";
import ProductCard from "@/components/shared/ProductCard";
import { useAppSelector } from "@/hooks/useRedux";
import { cn } from "@/lib/utils";
import React from "react";

type PropTypes = {
  className?: string;
};
const ProductGrid = ({ className }: PropTypes) => {
  const { products } = useAppSelector((state) => state.product);
  return (
    <div className={cn("grid grid-cols-4 gap-5", className)}>
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
