import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Star, Truck } from "lucide-react";
import Image from "next/image";

import React from "react";

const BannerSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg">
                🎉 Exclusive Offer - Limited Time
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Premium</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                  Fresh Products
                </span>
                <br />
                <span className="text-gray-900">Delivered</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience the finest selection of organic and fresh products,
                delivered straight to your doorstep with our premium quality
                guarantee.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold text-gray-900">
                Starting from <span className="text-emerald-600">৳100</span>
              </div>
              <div className="text-lg text-gray-500 line-through">৳150</div>
              <Badge className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                33% OFF
              </Badge>
            </div>

            <div className="flex items-center gap-6">
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300">
                Shop Now
              </Button>

              <Button
                variant="outline"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full text-lg font-medium"
              >
                View Catalog
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">
                  4.9/5 (2,847 reviews)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-600" />
                <span className="text-gray-600 font-medium">
                  30-min delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                width={800}
                height={500}
                src="/placeholder.svg?height=500&width=600"
                alt="Premium Fresh Products"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">100% Organic</div>
                    <div className="text-sm text-gray-500">Certified Fresh</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Fast Delivery</div>
                    <div className="text-sm text-gray-500">Within 30 mins</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default BannerSection;
