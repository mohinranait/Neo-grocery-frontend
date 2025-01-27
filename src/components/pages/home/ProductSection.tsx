import ProductsSlider from "@/components/sliders/ProductsSlider";
import { Button } from "@/components/ui/button";
import React from "react";

const ProductSection = () => {
  return (
    <section className="py-10">
      <div>
        <div className="px-2 md:px-0 container">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-primary leading-[20px] font-semibold text-lg">
                Best selling{" "}
              </p>
              <p className="text-gray-600 text-sm">
                Most popular product for last week
              </p>
            </div>
            <div>
              <Button variant={"link"}>View All</Button>
            </div>
          </div>
          <div>
            <ProductsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
