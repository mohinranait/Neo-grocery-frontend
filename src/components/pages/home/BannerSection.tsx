import BannerSlider from "@/components/sliders/BannerSlider";

import React from "react";

const BannerSection = () => {
  return (
    <section className="">
      <div className="px-2 md:px-0 container  md:h-[400px] flex gap-4">
        <div className="hidden md:block">
          <div className="w-[280px] "></div>
        </div>
        <div className="w-grow overflow-hidden">
          <BannerSlider />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
