import ProductsSlider from "@/components/sliders/ProductsSlider";
import { Button } from "@/components/ui/button";
import React from "react";

const ProductSection = () => {
  return (
    <section className="py-10">
      <div>
        <div className="container">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-primary font-semibold text-lg">
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
