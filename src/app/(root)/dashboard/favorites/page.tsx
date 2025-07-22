"use client";
import ProductCard from "@/components/shared/ProductCard";
import { useAppSelector } from "@/hooks/useRedux";
import React from "react";

const FavoriteProducts = () => {
  const { favorites } = useAppSelector((state) => state.favorite);
  const { products } = useAppSelector((state) => state.product);
  const favoriteProductIds = new Set(
    favorites?.map((fav) => String(fav.product))
  );

  const getMatchProducts = products?.filter((product) =>
    favoriteProductIds.has(String(product._id))
  );

  return (
    <div className=" mx-auto px-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Favorites</h2>
          <p className="text-muted-foreground">Manage your favorite products</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {getMatchProducts?.map((prod, index) => {
          return (
            <div key={index}>
              <ProductCard product={prod} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteProducts;
