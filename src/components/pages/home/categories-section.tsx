"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DEFAULT_IMAGE } from "@/helpers/secretVariable";
import { useAppSelector } from "@/hooks/useRedux";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const colors = [
  {
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-50",
  },
  {
    color: "from-red-400 to-red-500",
    bgColor: "bg-red-50",
    textColor: "text-red-50",
  },
  {
    color: "from-blue-400 to-blue-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-50",
  },
  {
    color: "from-orange-400 to-orange-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-50",
  },
  {
    color: "from-purple-400 to-purple-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-50",
  },
  {
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-50",
  },
  {
    color: "from-cyan-400 to-cyan-500",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-50",
  },
  {
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-50",
  },
  {
    color: "from-pink-400 to-pink-500",
    bgColor: "bg-pink-50",
    textColor: "text-pink-50",
  },
  {
    color: "from-indigo-400 to-indigo-500",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-50",
  },
];
const CategoriesSection = () => {
  const { categories } = useAppSelector((state) => state.category);
  const cates = categories?.filter((cat) => cat.parent === null);

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of fresh and organic products across
            different categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 lg:gap-6">
          {cates?.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${colors[index].bgColor} border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer`}
            >
              <div className="p-4 lg:p-6 text-center">
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-3 lg:mb-4 rounded-2xl bg-gradient-to-br ${colors[index].color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 `}
                >
                  <Image
                    src={category?.catThumbnail || `/${DEFAULT_IMAGE}`}
                    width={60}
                    height={60}
                    className="w-14 h-14 rounded-md"
                    alt="category image"
                  />
                </div>

                {/* Category Info */}
                <h3
                  className={`font-bold text-gray-900 text-sm lg:text-base mb-1 lg:mb-2 group-hover:text-emerald-600 transition-colors`}
                >
                  {category?.name}
                </h3>
                <p className="text-xs lg:text-sm text-gray-500 font-medium">
                  {category?.productCount || 0} Items
                </p>

                {/* Hover Effect Badge */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/shop?cat=${category?._id}`}>
                    <Badge className="bg-emerald-500 text-white text-xs px-2 py-1">
                      Shop Now
                    </Badge>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-8 lg:mt-12">
          <Button
            variant="outline"
            className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
