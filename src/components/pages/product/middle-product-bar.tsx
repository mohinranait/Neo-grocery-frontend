import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/types/product.type";
import { Check, CircleX, Heart, Share2, Star } from "lucide-react";
import React from "react";
import ActionsButton from "./ActionsButton";
import Link from "next/link";
import { TCategoryType } from "@/types/category.type";
import { TBrandType } from "@/types/brand.type";

type Props = {
  product: TProduct;
  avgRating: number;
  totalReview: number;
  withBrandCategory?: boolean;
  brands?: TBrandType[];
  categories?: TCategoryType[];
};
const MiddleProductBar = ({
  product,
  avgRating,
  totalReview,
  brands,
  categories,
  withBrandCategory = false,
}: Props) => {
  return (
    <div className="space-y-4 flex-grow">
      <div>
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-2 w-full">
              <div className="flex justify-between items-center gap-3 flex-wrap">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                  Organic
                </Badge>
                <div className="flex gap-2 items-center">
                  <Button
                    variant="link"
                    className="text-gray-600 h-auto py-1 px-1"
                  >
                    <Heart className="w-4 h-4 mr-1" />
                  </Button>
                  <Button
                    variant="link"
                    className="text-gray-600 h-auto py-1 px-1"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                {product?.name}
              </h1>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(avgRating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-base font-semibold text-gray-900">
              {avgRating || 0}/5
            </span>
            <span className="text-gray-500 text-base">
              ({totalReview || 0} reviews)
            </span>
          </div>

          {/* Description */}
          {product?.productShortDesc && (
            <p className="text-gray-600 text-lg leading-relaxed">
              {product?.productShortDesc}
            </p>
          )}
        </div>

        {/* Product Info */}
      </div>
      <div className="flex flex-wrap  gap-4 text-sm">
        {product?.skuCode && (
          <div>
            <span className="text-gray-500">SKU:</span>
            <span className="ml-2 font-medium text-gray-900">
              {product?.skuCode}
            </span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <span className="text-gray-500">Stock:</span>
          {product?.isStock > 0 ? (
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
              <Check className="w-3 h-3 mr-1" />
              In Stock
            </Badge>
          ) : (
            <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
              <CircleX className="w-3 h-3 mr-1" />
              In Stock
            </Badge>
          )}
        </div>
      </div>

      <ActionsButton product={product} />
      {withBrandCategory && (
        <div>
          {brands && brands?.length > 0 && (
            <p className="text-gray-500 text-sm">
              Brand:
              {brands?.map((brand, index) => (
                <Link
                  key={index}
                  href={`/brand/${brand?.slug}`}
                  className="text-gray-500 hover:underline hover:text-gray-700 text-sm"
                >
                  {brand?.name},
                </Link>
              ))}
            </p>
          )}

          {categories && categories?.length > 0 && (
            <p className="text-gray-500 text-sm">
              Category:
              {categories?.map((cat: TCategoryType, index: number) => (
                <Link
                  key={index}
                  href={`/brand/${cat?.slug}`}
                  className="text-gray-500 hover:underline hover:text-gray-700 text-sm"
                >
                  {cat?.name},
                </Link>
              ))}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MiddleProductBar;
