// import BannerSection from "@/components/pages/home/BannerSection";
import BannerSection from "@/components/pages/home/BannerSection";
import CategoriesSection from "@/components/pages/home/categories-section";
import ProductSection from "@/components/pages/home/ProductSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Gift, Headphones, Shield, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on orders over $50",
    color: "text-green-500",
    IconBgColor: "bg-green-100",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment processing",
  },
  {
    icon: Gift,
    title: "Special Offers",
    description: "Regular discounts and promotions",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer service",
  },
];

const HomePage = () => {
  return (
    <main>
      {/* Hero Banner */}
      <BannerSection />

      {/* Categoriys section */}
      <CategoriesSection />

      {/* Product Section */}
      <ProductSection />

      {/* Features Section */}
      <section className="mb-10">
        <div className="container mt-10 lg:mt-0">
          <div className="grid lg:grid-cols-2 gap-6">
            <div
              className="relative group w-full h-[200px] bg-white p-4"
              style={{
                backgroundImage: `url('/intro.jpg')`,
                backgroundPosition: "right",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute w-full h-full flex items-center  pl-10 top-2/4 left-0 -translate-y-2/4">
                <div className="relative ">
                  <p className="text-xl z-30 text-text-color mb-1 font-semibold">
                    Tomato
                  </p>
                  <p className="text-sm z-30 text-gray-600 font-medium mb-2">
                    Optionals Skins
                  </p>
                  <div>
                    <Link
                      href={"/"}
                      className="text-primary text-sm font-semibold"
                    >
                      Details new
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative h-[200px] group w-full bg-white p-4"
              style={{
                backgroundImage: `url('/intro2.jpg')`,
                backgroundPosition: "right",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute w-full h-full flex items-center  pl-10 top-2/4 left-0 -translate-y-2/4">
                <div className="relative ">
                  <p className="text-xl z-30 text-text-color mb-1 font-semibold">
                    Tomato
                  </p>
                  <p className="text-sm z-30 text-gray-600 font-medium mb-2">
                    Optionals Skins
                  </p>
                  <div>
                    <Link
                      href={"/"}
                      className="text-primary text-sm font-semibold"
                    >
                      Details new
                    </Link>
                  </div>
                </div>
              </div>
              {/* <Image
                className="w-full"
                src="/intro.jpg"
                alt="avater"
                width={300}
                height={200}
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-700"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        {/* Decorative circles */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

        <div className="container px-2 md:px-0 relative">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6 text-white">
              <div className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur-sm">
                Limited Time Offer
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Summer Sale
                <span className="block mt-1 text-yellow-300">
                  Up to 50% Off
                </span>
              </h2>
              <p className="text-white/80 md:text-lg max-w-md">
                Do not miss out on these amazing deals! Shop our summer
                collection with exclusive discounts for a limited time.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="secondary" size="lg">
                  Shop the Sale
                </Button>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex h-10 items-center justify-center rounded-full bg-white/20 px-4 backdrop-blur-sm">
                    <span className="font-mono font-bold">05</span>
                    <span className="ml-1 text-xs">days</span>
                  </div>
                  <div className="flex h-10 items-center justify-center rounded-full bg-white/20 px-4 backdrop-blur-sm">
                    <span className="font-mono font-bold">12</span>
                    <span className="ml-1 text-xs">hrs</span>
                  </div>
                  <div className="flex h-10 items-center justify-center rounded-full bg-white/20 px-4 backdrop-blur-sm">
                    <span className="font-mono font-bold">45</span>
                    <span className="ml-1 text-xs">min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mx-auto lg:mx-0">
              <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                {/* Main sale image with decorative elements */}
                <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl"></div>
                <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border-4 border-white/20 shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=500&width=500&text=SALE"
                    alt="Summer Sale"
                    fill
                    className="object-cover"
                  />
                  {/* Floating sale tag */}
                  <div className="absolute -right-6 -top-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500 text-black font-bold text-xl rotate-12">
                    50% OFF
                  </div>
                </div>
                {/* Floating product images */}
                <div className="absolute -left-8 top-10 h-16 w-16 rotate-12 overflow-hidden rounded-full border-2 border-white/20 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Product"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute right-0 bottom-10 h-20 w-20 -rotate-12 overflow-hidden rounded-full border-2 border-white/20 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Product"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductSection />

      {/* Newsletter */}
      <section className="bg-muted/50 py-12 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-xl text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground">
              Stay updated with our latest products and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-6">
              <Input
                placeholder="Enter your email"
                type="email"
                className="sm:flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group text-center p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center group-hover:bg-main transition-all  w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-main group-hover:text-slate-50" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-main">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
