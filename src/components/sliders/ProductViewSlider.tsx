"use client";
import React, { useState } from "react";
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
const ProductViewSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <React.Fragment>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image
            alt="image"
            width={420}
            height={400}
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="w-auto mx-auto max-h-[400px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="w-auto mx-auto max-h-[400px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="w-auto mx-auto max-h-[400px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="w-auto mx-auto max-h-[400px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            className="w-auto mx-auto max-h-[400px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            className="w-auto mx-auto max-h-[400px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            className="w-auto mx-auto max-h-[400px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            className="w-auto mx-auto max-h-[400px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            className="w-auto mx-auto max-h-[400px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            className="w-auto mx-auto max-h-[400px]"
          />
        </SwiperSlide>
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
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-7.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-8.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-9.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="image"
            width={400}
            height={400}
            src="https://swiperjs.com/demos/images/nature-10.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
};

export default ProductViewSlider;
