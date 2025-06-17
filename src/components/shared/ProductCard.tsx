"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { TProduct } from "@/types/product.type";
import { Minus, Plus } from "lucide-react";
import { TCartItems } from "@/types/cart.type";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { addToCart, setAllCarts } from "@/redux/features/shoppingCartSlice";
import { Badge } from "../ui/badge";
import ProductViewModal from "../modals/ProductViewModal";

type Props = {
  product: TProduct;
};
const ProductCard = ({ product }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { name, slug, featureImage, price } = product || {};
  // Redux State
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const { carts } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const findCart = carts?.find((cart) => cart?.product === product?._id);

  const handleAddToCart = () => {
    const cartData: TCartItems = {
      user: null,
      product: product?._id,
      quantity: 1,
      price: product?.price?.sellPrice
        ? product?.price?.sellPrice
        : product?.price?.productPrice,
      sku: "default",
    };
    if (isAuthenticated) {
      cartData.user = user?._id as string;
    }

    dispatch(addToCart(cartData));
  };

  const increment = (qty: number) => {
    if (qty < 20) {
      const updateCarts = carts?.map((cart) =>
        cart?.product === product?._id
          ? { ...cart, quantity: cart?.quantity + 1 }
          : cart
      );
      dispatch(setAllCarts(updateCarts));
    }
  };

  const decrement = (qty: number) => {
    if (qty > 1) {
      const updateCarts = carts?.map((cart) =>
        cart?.product === product?._id
          ? { ...cart, quantity: cart?.quantity - 1 }
          : cart
      );
      dispatch(setAllCarts(updateCarts));
    }
  };

  return (
    <>
      {/* <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
        <CardContent className="p-4">
          <div className="relative mb-4">
            <Image
              width={400}
              height={400}
              src={featureImage?.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
              New
            </Badge>

            <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
              -45%
            </Badge>

            <Button
              size="icon"
              variant="ghost"
              className="absolute bottom-2 right-2 bg-white/80 hover:bg-white"
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm line-clamp-2">
              {product.name}
            </h3>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(5)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-xs text-gray-500 ml-1">
                ({product.rating})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-green-600">৳100</span>

              <span className="text-sm text-gray-500 line-through">৳60</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center border rounded-lg">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8"
                  // onClick={decrementQuantity}
                  // disabled={quantity === 0}
                >
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                  5
                </span>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Plus className="w-3 h-3" />
                </Button>
              </div>

              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Add to Cart
              </Button>
            </div>
          </div>
        </CardContent>
      </Card> */}
      <article className="border  overflow-hidden min-h-[250px] relative flex flex-col group bg-white hover:border-main border-border rounded">
        <div className="absolute z-10 top-2 right-2 rotate-12">
          <Badge className="bg-primary font-semibold">New</Badge>
        </div>
        <div className="aspect-square relative overflow-hidden  flex items-center justify-center ">
          <Link
            href={`/product/${slug}`}
            className="h-full inline-flex items-center  justify-center "
          >
            <Image
              src={featureImage?.image}
              width={200}
              height={150}
              alt="Image"
              className="h-full w-auto mx-auto"
            />
          </Link>
          <div className="absolute scale-0 transition-all group-hover:scale-100 inset-0 bg-gradient-to-br from-muted/80 to-muted/20"></div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-black/80 hover:bg-black backdrop-blur-sm"
            >
              Quick Shop
            </Button>
          </div>
        </div>
        <div className="px-3 pt-4 min-h-[52px] flex-grow space-y-2">
          <Link
            href={`/product/${slug}`}
            className=" hover:text-main text-sm text-gray-700 transition-all  inline-block leading-[17px] font-medium"
          >
            {name}
          </Link>
        </div>
        <div className="px-3 pt-2 pb-3">
          <div className=" relative h-[32px] gap-2 flex items-center justify-between ">
            <div className="flex items-center gap-2 mt-1">
              <span className="font-bold">
                ${price?.sellPrice > 0 ? price?.sellPrice : price?.productPrice}
              </span>
              {price?.sellPrice > 0 && (
                <span className="text-sm text-muted-foreground line-through">
                  ${price?.productPrice}
                </span>
              )}
            </div>

            {findCart?.product ? (
              <div className="absolute h-[32px] top-2/4 -translate-y-2/4 right-0">
                <div className="inline-flex gap-1  items-center">
                  <button
                    onClick={() => decrement(findCart?.quantity || 1)}
                    className="w-7 h-7 hover:bg-main hover:text-white rounded-full border border-border flex items-center justify-center cursor-pointer"
                  >
                    <Minus size={15} />
                  </button>
                  <span className="w-[20px] text-center py-[3px] text-sm">
                    {findCart?.quantity}
                  </span>
                  <button
                    onClick={() => increment(findCart?.quantity || 1)}
                    className="w-7 h-7 hover:bg-main hover:text-white rounded-full border border-border flex items-center justify-center cursor-pointer"
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>
            ) : (
              <Button
                onClick={handleAddToCart}
                type="button"
                className=" h-[32px] px-[8px] "
              >
                <Plus />
              </Button>
            )}
          </div>
        </div>
        <ProductViewModal setOpen={setIsOpen} open={isOpen} />
      </article>
    </>
  );
};

export default ProductCard;
