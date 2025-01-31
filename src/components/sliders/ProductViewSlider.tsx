"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { Swiper as SwiperClass } from "swiper/types";
import "./productViewSlider.css";
import { TProduct } from "@/types/product.type";
type Props = {
  product: TProduct;
};
const ProductViewSlider = ({ product }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const { featureImage, imageGallary } = product || {};
    const pImgs = [featureImage?.image, ...(imageGallary as string[])];
    setImages(pImgs);
  }, [product]);

  return (
    <React.Fragment>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images?.map((img, i) => (
          <SwiperSlide
            key={i}
            className="min-h-[400px] flex items-center"
            style={{ display: "flex" }}
          >
            <Image
              alt="image"
              width={400}
              height={400}
              src={img}
              className="w-auto mx-auto max-h-[400px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images?.map((img, i) => (
          <SwiperSlide key={i}>
            <Image alt="image" width={400} height={400} src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
};

export default ProductViewSlider;
