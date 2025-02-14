import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { TProduct } from "@/types/product.type";

type Props = {
  product: TProduct;
};
const ProductCard = ({ product }: Props) => {
  const { name, slug, featureImage, price } = product || {};
  return (
    <article className="border min-h-[280px] flex flex-col group bg-white hover:border-main border-border rounded">
      <div className="px-8 flex items-center justify-center h-[130px]">
        <Link
          href={`/product/${slug}`}
          className="h-full inline-flex items-center justify-center pt-1"
        >
          <Image
            src={featureImage?.image}
            width={200}
            height={150}
            alt="Image"
            className="h-full w-auto mx-auto"
          />
        </Link>
      </div>
      <div className="px-3 flex-grow space-y-2">
        <p className="text-xs text-gray-400 uppercase">In Stock</p>
        <Link
          href={`/product/${slug}`}
          className="text-primary hover:text-main transition-all text-sm inline-block leading-[17px] font-semibold"
        >
          {name}
        </Link>
        <p className="flex items-center gap-2">
          <span className="text-main text-lg font-semibold">
            ${price?.sellPrice ? price?.sellPrice : price?.productPrice}
          </span>
          {price?.sellPrice > 0 && (
            <del className="text-gray-400 text-sm font-semibold">
              ${price?.productPrice}
            </del>
          )}
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
