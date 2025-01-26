import { Button } from "@/components/ui/button";
import { categorysLists } from "@/constans/categorysLists";

import React from "react";

const BannerSection = () => {
  return (
    <section className="">
      <div className="container h-[480px] flex gap-4">
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
        <div className="flex-grow">
          <div
            className=" h-[480px] py-5 px-14 flex items-center mt-3"
            style={{ backgroundImage: `url('/slider/slider-image-2.jpg')` }}
          >
            <div className="flex flex-col gap-5">
              <div>
                <span className="px-4 py-1 inline-flex text-nowrap bg-primary text-white text-xs font-semibold rounded-3xl">
                  Exclusive effer 20%{" "}
                </span>
              </div>
              <div className="w-[80%]">
                <h1 className="text-5xl font-bold text-black">
                  Special in the grocery store
                </h1>
              </div>
              <div className="flex gap-2 items-end">
                <span className="text-slate-800">From</span>
                <span className="text-4xl font-extrabold text-main">
                  50 BDT
                </span>
              </div>
              <div className="flex gap-2 items-end">
                <Button className="rounded-3xl bg-main">Shop now </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
