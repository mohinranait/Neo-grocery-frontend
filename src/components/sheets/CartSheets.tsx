"use client";
import React, { FC } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBagIcon, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import CartCounter from "../utils/CartCounter";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { removeCart } from "@/redux/features/shoppingCartSlice";

type Props = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
const CartSheets: FC<Props> = ({ open, setOpen }) => {
  // Redux state
  const { carts } = useAppSelector((state) => state.cart);
  const { products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  // Count total cart items
  const totalItems = carts?.reduce(
    (total, current) => total + current?.quantity,
    0
  );
  return (
    <Sheet onOpenChange={setOpen} open={open} key={"right"}>
      <SheetTrigger>
        <li className=" py-3 inline-flex md:h-10 md:w-10 items-center justify-center flex-col px-2 relative">
          <div className="flex items-center flex-col">
            <span className="px-1 text-[10px] md:text-xs font-semibold text-white rounded-full bg-main absolute top-[2px] right-0 md:-top-1 md:-right-1">
              {carts?.length || 0}
            </span>

            <ShoppingCart className="md:hidden text-gray-500" size={16} />

            <ShoppingCart className="hidden md:block" size={24} />

            <p className=" md:hidden text-xs text-gray-500">Cart</p>
          </div>
        </li>
        {/* <li className="hidden  rounded-full h-10 w-10 md:inline-flex items-center justify-center relative">
          <div className="w-10 cursor-pointer h-10 relative flex items-center justify-center rounded-full ">
            <ShoppingCart size={24} />
            <span className="px-1 text-xs font-semibold text-white rounded-full bg-main absolute -top-1 -right-1">
              9+
            </span>
          </div>
        </li> */}
      </SheetTrigger>
      <SheetContent className="w-full px-0 py-0 res4:w-[400px]">
        <div className="flex flex-col h-full">
          <div>
            <div className="h-[50px]  px-3 flex gap-1 items-center bg-gray-200">
              <ShoppingBagIcon size={18} />
              <p className="text-sm">
                Shipping Cart{" "}
                <span className="text-xs text-gray-500">
                  ({totalItems || 0} Items)
                </span>
              </p>
            </div>
          </div>
          <div className="flex-grow h-[calc(100vh-170px)] overflow-y-auto">
            <ul className="divide-y divide-slate-200">
              {carts?.map((cart, index) => {
                const findProduct = products?.find(
                  (product) => product?._id === cart?.product
                );
                return (
                  <li
                    key={index}
                    className="flex  hover:bg-gray-50 py-3  px-3 items-center"
                  >
                    <div>
                      <div className="relative w-[100px]">
                        <button
                          onClick={() => dispatch(removeCart(cart?.product))}
                          className="absolute cursor-pointer flex items-center justify-center -top-1 -left-1 h-7 w-7 bg-white rounded-full shadow"
                        >
                          <Trash2 className="text-red-500" size={14} />
                        </button>
                        <Image
                          src={findProduct?.featureImage?.image || ""}
                          width={100}
                          height={100}
                          alt="Image"
                          className="w-[100px] h-100px"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <Link
                        href={"/"}
                        className="block text-sm relative  text-black"
                      >
                        {findProduct?.name}
                      </Link>
                      <p className="text-xs my-[2px] text-gray-600">
                        Product Price: 100$
                      </p>
                      <div className="flex justify-between">
                        <CartCounter cart={cart} />
                        <span className="text-sm text-black">45$</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="px-3 py-3 border-t border-border">
            <div className="h-[86px]">
              <div className="flex items-center justify-between">
                <p className="text-gray-800">Sub Total</p>
                <p className="text-primary">100$</p>
              </div>
              <div className="flex gap-2 mt-3">
                <Button className="w-full">Cart </Button>
                <Button className="w-full">Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheets;
