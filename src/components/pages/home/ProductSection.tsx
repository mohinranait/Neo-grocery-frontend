"use client";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/useRedux";
import React from "react";

const ProductSection = () => {
  const { products } = useAppSelector((state) => state.product);
  return (
    <>
      <section className="py-10">
        <div>
          <div className="px-2 md:px-0 container">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-2xl font-bold text-gray-900 ">
                  Popular products
                </p>
                <p className="text-gray-600 text-sm">
                  Most popular product for last week
                </p>
              </div>
              <div>
                <Button variant={"link"}>View All</Button>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-3">
              {products?.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
