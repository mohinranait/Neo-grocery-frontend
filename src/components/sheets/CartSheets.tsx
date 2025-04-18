"use client";
import React, { useEffect } from "react";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ShoppingBagIcon, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import CartCounter from "../utils/CartCounter";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { removeCart } from "@/redux/features/shoppingCartSlice";
import { setCartSidebarOpen } from "@/redux/features/uiSlice";
import { usePathname } from "next/navigation";
import useTotalCartPrice from "@/hooks/useTotalCartPrice";
import { currency } from "@/helpers/utils";
import EmptyCartComponent from "../utils/EmptyCartComponent";

const CartSheets = () => {
  const pathName = usePathname();
  // Redux state
  const { carts } = useAppSelector((state) => state.cart);
  const { cartSidebarOpen } = useAppSelector((state) => state.ui);

  const { products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  // Count total cart items
  const totalItems = carts?.reduce(
    (total, current) => total + current?.quantity,
    0
  );

  useEffect(() => {
    dispatch(setCartSidebarOpen(false));
  }, [pathName]);

  return (
    <Sheet
      onOpenChange={() => dispatch(setCartSidebarOpen(!cartSidebarOpen))}
      open={cartSidebarOpen}
      key={"right"}
    >
      <SheetContent className="w-full px-0 py-0 res4:w-[400px]">
        <div className="flex flex-col h-full">
          <div>
            <div className="h-[50px]  px-3 flex gap-1 items-center bg-gray-200">
              <ShoppingBagIcon size={18} />
              <p
                onClick={() => dispatch(setCartSidebarOpen(false))}
                className="text-sm"
              >
                Shipping Cart{" "}
                <span className="text-xs text-gray-500">
                  ({totalItems || 0} Items)
                </span>
              </p>
            </div>
          </div>
          <div className="flex-grow h-[calc(100vh-170px)] overflow-y-auto">
            {carts?.length === 0 && <EmptyCartComponent />}
            <ul className="divide-y divide-slate-200">
              {carts?.map((cart, index) => {
                const findProduct = products?.find(
                  (product) => product?._id === cart?.product
                );
                return (
                  <li
                    key={index}
                    className="flex  hover:bg-gray-50 py-3 gap-3 px-3 items-center"
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
                        Product Price: {cart?.price}$
                      </p>
                      <div className="flex justify-between">
                        <CartCounter cart={cart} />
                        <span className="text-sm text-black">
                          {cart?.price * cart?.quantity}$
                        </span>
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
                <p className="text-primary">
                  {currency}
                  {useTotalCartPrice()}
                </p>
              </div>
              <div className="flex gap-2 mt-3">
                <Link href={"/cart"} className="w-full">
                  <Button className="w-full">Cart </Button>
                </Link>
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
