import BannerSlider from "@/components/sliders/BannerSlider";
import { categorysLists } from "@/constans/categorysLists";

import React from "react";

const BannerSection = () => {
  return (
    <section className="">
      <div className="px-2 md:px-0 container  md:h-[400px] flex gap-4">
        <div className="hidden md:block">
          <div className="w-[280px] ">
            <div className="border border-border border-t-0  rounded rounded-t-none ">
              <ul className="">
                {categorysLists?.map((category, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="inline-flex group text-primary hover:text-main w-full px-4 py-2 justify-between items-center"
                    >
                      <span className="inline-flex gap-1 items-center">
                        {/* <Cookie size={14} /> */}
                        {category?.icon}
                        <span className="text-sm">{category?.name}</span>
                      </span>
                      <span className="text-gray-500 group-hover:text-main text-sm">
                        {category?.totalItem}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-grow overflow-hidden">
          <BannerSlider />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
