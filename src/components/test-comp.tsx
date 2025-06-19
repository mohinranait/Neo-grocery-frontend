"use client";

import { useState } from "react";
import {
  Search,
  Phone,
  ShoppingCart,
  User,
  Menu,
  ChevronDown,
  Star,
  Truck,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <div className="flex items-center gap-2">
              <Truck className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-center sm:text-left">
                Free delivery on orders over 500 BDT
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>100% Fresh Guarantee</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-medium text-xs sm:text-sm">
              Contact: (+88) 01728068200
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>

            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <ShoppingCart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                  FreshMart
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  Your Premium Fresh Store
                </p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                  FreshMart
                </h1>
              </div>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search for fresh products, organic foods..."
                  className="w-full pl-4  py-[14px] h-auto  rounded-full border-2 focus-visible:!outline-none border-gray-200 focus-visible:shadow-none focus-visible:ring-offset-0 focus-visible:border-emerald-500 focus-visible:ring-0 focus:ring-emerald-200 transition-all duration-200 text-base pr-20"
                />
                <Button
                  size="sm"
                  className="absolute py-[22px] h-auto right-1 top-2/4 -translate-y-2/4 bottom-1 px-8 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-md"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Desktop Account Button */}
              <Button
                variant="ghost"
                className="hidden md:flex items-center gap-2 hover:bg-emerald-50 rounded-full px-3 sm:px-4 py-2"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                <span className="font-medium text-gray-700 text-sm sm:text-base">
                  Account
                </span>
              </Button>

              {/* Mobile Account Icon */}
              <Button variant="ghost" className="md:hidden p-2">
                <User className="w-5 h-5 text-gray-600" />
              </Button>

              {/* Cart Button */}
              <div className="relative">
                <Button className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-full px-3 sm:px-6 py-2 shadow-lg text-sm sm:text-base">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline font-medium">Cart</span>
                  <Badge className="bg-orange-500 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ml-1">
                    3
                  </Badge>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="lg:hidden mt-3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-12 py-3 h-auto rounded-full border-2 border-gray-200 focus:border-emerald-500 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-200"
              />
              <Button
                size="sm"
                className="absolute right-1 top-2/4 -translate-y-2/4 bottom-1 px-7 h-auto py-5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-md"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between py-3">
              <div className="flex items-center gap-8">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg px-6 py-2 font-medium"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu className="w-4 h-4" />
                  ALL CATEGORIES
                  <ChevronDown className="w-4 h-4" />
                </Button>

                <div className="flex items-center gap-6">
                  <a
                    href="#"
                    className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-medium shadow-md">
                  �� Special Offers
                </Badge>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
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
                      <div className="font-bold text-gray-900">
                        100% Organic
                      </div>
                      <div className="text-sm text-gray-500">
                        Certified Fresh
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        Fast Delivery
                      </div>
                      <div className="text-sm text-gray-500">
                        Within 30 mins
                      </div>
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

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="absolute left-0 top-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl overflow-y-auto">
            <div className="p-4 sm:p-6 space-y-4">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg text-gray-900">Menu</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2"
                >
                  ✕
                </Button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-3 border-b border-gray-200 pb-4">
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                >
                  Contact
                </a>
                <div className="py-2">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-full font-medium text-sm">
                    🔥 Special Offers
                  </Badge>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h4 className="font-bold text-base text-gray-900 mb-3">
                  Categories
                </h4>
                {[
                  {
                    name: "Fruits & Vegetables",
                    icon: "🥬",
                    count: "245+ items",
                  },
                  { name: "Meats & Seafood", icon: "🥩", count: "89+ items" },
                  {
                    name: "Drinks & Beverages",
                    icon: "🥤",
                    count: "156+ items",
                  },
                  { name: "Breads & Bakery", icon: "🍞", count: "78+ items" },
                  { name: "Dairy Products", icon: "🥛", count: "134+ items" },
                  { name: "Organic Foods", icon: "🌱", count: "298+ items" },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{category.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-emerald-600 text-sm">
                          {category.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {category.count}
                        </div>
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-emerald-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Categories Sidebar */}
      {isMenuOpen && (
        <div className="hidden lg:block fixed left-4 top-32 w-80 bg-white shadow-2xl rounded-xl border border-gray-100 z-40">
          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            <h3 className="font-bold text-lg text-gray-900 border-b border-gray-200 pb-3">
              Categories
            </h3>
            {[
              { name: "Fruits & Vegetables", icon: "🥬", count: "245+ items" },
              { name: "Meats & Seafood", icon: "🥩", count: "89+ items" },
              { name: "Drinks & Beverages", icon: "🥤", count: "156+ items" },
              { name: "Breads & Bakery", icon: "🍞", count: "78+ items" },
              { name: "Dairy Products", icon: "🥛", count: "134+ items" },
              { name: "Organic Foods", icon: "🌱", count: "298+ items" },
            ].map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-emerald-600">
                      {category.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {category.count}
                    </div>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-emerald-600" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
