"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { TProduct } from "@/types/product.type";
import { Minus, Plus } from "lucide-react";
import { TCartItems } from "@/types/cart.type";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { addToCart, setAllCarts } from "@/redux/features/shoppingCartSlice";

type Props = {
  product: TProduct;
};
const ProductCard = ({ product }: Props) => {
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
    <article className="border min-h-[250px] flex flex-col group bg-white hover:border-main border-border rounded">
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
          className=" hover:text-main text-gray-700 transition-all text-sm inline-block leading-[17px] font-medium"
        >
          {name}
        </Link>
      </div>
      <div className="px-3 pt-2 pb-3">
        <div className=" relative h-[32px] gap-2 flex items-center justify-between ">
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
    </article>
  );
};

export default ProductCard;
