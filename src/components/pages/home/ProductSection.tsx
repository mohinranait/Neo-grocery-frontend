import ProductCard from "@/components/shared/ProductCard";
import React from "react";

const ProductSection = () => {
  return (
    <section>
      <div>
        <div className="container">
          <div>
            <p className="text-primary font-semibold text-lg">Best selling </p>
            <p className="text-gray-600 text-sm">
              Most popular product for last week
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2 lg:gap-4">
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

export default ProductSection;
