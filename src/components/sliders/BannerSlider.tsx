"use client";
import React from "react";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const BannerSlider = () => {
  return (
    <div className="pt-3">
      <Swiper className="mySwiper h-[250px] ms:h-[300px] md:h-[388px]">
        <SwiperSlide className="">
          <div
            className="h-full rounded-lg py-5 px-5 md:px-14 flex items-center "
            style={{
              backgroundImage: `url('/slider/slider-image-2.jpg')`,
            }}
          >
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-5">
              <div>
                <span className="px-4 py-1 inline-flex text-nowrap bg-primary text-white text-xs font-semibold rounded-3xl">
                  Exclusive effer 20%{" "}
                </span>
              </div>
              <div className="md:w-[80%]">
                <h1 className=" text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-black">
                  Special in the grocery store
                </h1>
              </div>
              <div className="flex gap-2 items-end">
                <span className="text-slate-800">From</span>
                <span className="text-4xl font-extrabold text-main">
                  100 BDT
                </span>
              </div>
              <div className="flex gap-2 items-end">
                <Button className="rounded-3xl bg-main">Shop now </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className=" h-full rounded-lg py-5 px-5 md:px-14 flex items-center"
            style={{ backgroundImage: `url('/slider/slider-3.webp')` }}
          >
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-5">
              <div>
                <span className="px-4 py-1 inline-flex text-nowrap bg-primary text-white text-xs font-semibold rounded-3xl">
                  Exclusive effer 20%{" "}
                </span>
              </div>
              <div className="md:w-[80%]">
                <h1 className=" text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-black">
                  Special in the grocery store
                </h1>
              </div>
              <div className="flex gap-2 items-end">
                <span className="text-slate-800">From</span>
                <span className="text-4xl font-extrabold text-main">
                  10 BDT
                </span>
              </div>
              <div className="flex gap-2 items-end">
                <Button className="rounded-3xl bg-main">Shop now </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
