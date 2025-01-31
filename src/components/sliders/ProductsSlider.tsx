"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ProductCard from "../shared/ProductCard";
import { useAppSelector } from "@/hooks/useRedux";

const ProductsSlider = () => {
  const { products } = useAppSelector((state) => state.product);
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={4}
      modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 12,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 12,
        },
      }}
      className="mySwiper"
    >
      {products?.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsSlider;
