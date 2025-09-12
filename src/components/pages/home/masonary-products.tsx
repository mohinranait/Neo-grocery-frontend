"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { calculateProductPrice, newProduct } from "@/helpers/product.helper";
import { currency } from "@/helpers/utils";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setProductModal } from "@/redux/features/uiSlice";
import { TProduct } from "@/types/product.type";
import { ArrowRight, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MasonaryProducts = () => {
  // Redux state
  const { products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const normalProducts = products?.filter(
    (product) => product?.variant === "Single Product"
  );

  // Show big product from masonary
  const feature = normalProducts[0];

  // handle open modal for show single product details
  const handleOpenModal = (product: TProduct) => {
    if (!product) {
      return;
    }
    dispatch(setProductModal(product));
  };
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 ">
              Featured Products
            </h2>
            <p className="text-gray-600">
              Hand-picked fresh items just for you
            </p>
          </div>
          <Button variant="outline" className="rounded-full bg-transparent">
            View All Products
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Large Featured Product */}
          {feature && (
            <Card className="md:col-span-2 md:row-span-2 group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    onClick={() => handleOpenModal(feature)}
                    src={`${feature?.featureImage?.image}?height=600&width=600`}
                    alt={feature?.name}
                    width={600}
                    height={600}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {newProduct(feature) && (
                    <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">
                      New
                    </Badge>
                  )}

                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      (124 reviews)
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature?.name}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    Premium quality avocados, perfect for your healthy
                    lifestyle. Rich in nutrients and incredibly fresh.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-main">
                        {currency}
                        {calculateProductPrice(feature)}
                      </span>

                      {feature?.price?.discountValue > 0 && (
                        <span className="text-sm text-gray-500 line-through">
                          {currency}
                          {feature?.price?.productPrice}
                        </span>
                      )}
                    </div>
                    <Link href={`/product/${feature?.slug}`}>
                      <Button className="bg-main hover:bg-main-light rounded-full">
                        View Product
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Regular Products */}
          {normalProducts?.slice(1, 6).map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    onClick={() => handleOpenModal(product)}
                    src={`${product?.featureImage?.image}?height=200&width=300`}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {newProduct(product) && (
                    <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
                      New
                    </Badge>
                  )}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(3) ? "fill-current" : ""
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 ml-1">
                      ({product.rating})
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="font-bold text-main">
                        {currency}
                        {calculateProductPrice(product)}
                      </span>

                      {product?.price?.discountValue > 0 && (
                        <span className="text-xs text-gray-500 line-through">
                          {currency}
                          {product?.price?.productPrice}
                        </span>
                      )}
                    </div>
                    <Link href={`/product/${product?.slug}`}>
                      <Button
                        size="sm"
                        className="bg-main hover:bg-main-light rounded-full"
                      >
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonaryProducts;
