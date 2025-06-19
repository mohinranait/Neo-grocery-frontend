import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

const CategoriesSection = () => {
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
          {[
            {
              name: "Fruits & Vegetables",
              icon: "🥬",
              count: "245+ items",
              color: "from-green-400 to-emerald-500",
              bgColor: "bg-green-50",
            },
            {
              name: "Meats & Seafood",
              icon: "🥩",
              count: "89+ items",
              color: "from-red-400 to-red-500",
              bgColor: "bg-red-50",
            },
            {
              name: "Drinks & Beverages",
              icon: "🥤",
              count: "156+ items",
              color: "from-blue-400 to-blue-500",
              bgColor: "bg-blue-50",
            },
            {
              name: "Breads & Bakery",
              icon: "🍞",
              count: "78+ items",
              color: "from-orange-400 to-orange-500",
              bgColor: "bg-orange-50",
            },
            {
              name: "Dairy Products",
              icon: "🥛",
              count: "134+ items",
              color: "from-purple-400 to-purple-500",
              bgColor: "bg-purple-50",
            },
            {
              name: "Organic Foods",
              icon: "🌱",
              count: "298+ items",
              color: "from-emerald-400 to-green-500",
              bgColor: "bg-emerald-50",
            },
            {
              name: "Frozen Foods",
              icon: "🧊",
              count: "167+ items",
              color: "from-cyan-400 to-cyan-500",
              bgColor: "bg-cyan-50",
            },
            {
              name: "Snacks & Sweets",
              icon: "🍪",
              count: "203+ items",
              color: "from-yellow-400 to-orange-500",
              bgColor: "bg-yellow-50",
            },
            {
              name: "Health & Beauty",
              icon: "💊",
              count: "124+ items",
              color: "from-pink-400 to-pink-500",
              bgColor: "bg-pink-50",
            },
            {
              name: "Baby Care",
              icon: "🍼",
              count: "95+ items",
              color: "from-indigo-400 to-indigo-500",
              bgColor: "bg-indigo-50",
            },
            {
              name: "Household",
              icon: "🧽",
              count: "186+ items",
              color: "from-gray-400 to-gray-500",
              bgColor: "bg-gray-50",
            },
            {
              name: "Pet Supplies",
              icon: "🐕",
              count: "67+ items",
              color: "from-teal-400 to-teal-500",
              bgColor: "bg-teal-50",
            },
          ].map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${category.bgColor} border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer`}
            >
              <div className="p-4 lg:p-6 text-center">
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-3 lg:mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                >
                  <span className="text-2xl lg:text-3xl">{category.icon}</span>
                </div>

                {/* Category Info */}
                <h3 className="font-bold text-gray-900 text-sm lg:text-base mb-1 lg:mb-2 group-hover:text-emerald-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs lg:text-sm text-gray-500 font-medium">
                  {category.count}
                </p>

                {/* Hover Effect Badge */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-emerald-500 text-white text-xs px-2 py-1">
                    Shop Now
                  </Badge>
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='0.3'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                ></div>
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
