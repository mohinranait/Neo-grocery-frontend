import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const ProductCard = () => {
  return (
    <article className="border group hover:border-main border-border rounded">
      <div className="px-8 flex items-center justify-center h-[130px]">
        <Link href={"/"}>
          <Image
            src={"/product-image-45-346x310.jpg"}
            width={200}
            height={150}
            alt="Image"
            className="w-full"
          />
        </Link>
      </div>
      <div className="px-3 space-y-2">
        <p className="text-xs text-gray-400 uppercase">In Stock</p>
        <Link
          href={"/"}
          className="text-primary hover:text-main transition-all text-sm inline-block leading-[17px] font-semibold"
        >
          All Natural Italian-Style Chicken Meatballs
        </Link>
        <p className="flex items-center gap-2">
          <span className="text-main text-lg font-semibold">$40</span>
          <del className="text-gray-400 text-sm font-semibold">$50</del>
        </p>
      </div>
      <div className="px-3 pt-2 gap-2 flex items-center pb-3">
        <Button className="rounded-3xl h-[30px] ">Add to Cart (0) </Button>
        {/* <button className="w-[30px] rounded border border-primary flex items-center justify-center h-[30px] ">
          <Eye size={18} />
        </button> */}
      </div>
    </article>
  );
};

export default ProductCard;
