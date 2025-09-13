import ProductsSlider from "@/components/sliders/ProductsSlider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const ProductSliderHome = () => {
  return (
    <section className="py-10">
      <div>
        <div className="px-2 md:px-0 container">
          <div className="flex justify-between flex-wrap items-center mb-2">
            <div>
              <p className="text-2xl font-bold text-gray-900 ">Best selling </p>
              <p className="text-gray-600 text-sm">
                Most popular product for last week
              </p>
            </div>

            <Button variant="outline" className="rounded-full bg-transparent">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div>
            <ProductsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSliderHome;
