"use client";
import React, { useEffect } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash2 } from "lucide-react";
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
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

const CartSheets = () => {
  const pathName = usePathname();
  // Redux state
  const { carts, totalQuantity, totalShipping, totalTax } = useAppSelector(
    (state) => state.cart
  );
  const { cartSidebarOpen } = useAppSelector((state) => state.ui);
  const totalCartPrice = useTotalCartPrice();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCartSidebarOpen(false));
  }, [pathName]);

  return (
    <Sheet
      onOpenChange={() => dispatch(setCartSidebarOpen(!cartSidebarOpen))}
      open={cartSidebarOpen}
      key={"right"}
    >
      <SheetContent className="w-full sm:max-w-lg p-0 bg-white border-l-2 border-slate-200">
        <SheetHeader className="p-4">
          <SheetTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Shopping Cart ({totalQuantity} items)
          </SheetTitle>
        </SheetHeader>

        {carts.length === 0 ? (
          <EmptyCartComponent />
        ) : (
          <div className="flex flex-col h-full">
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto space-y-4 px-4">
              {carts.map((cart, index) => {
                return (
                  <div
                    key={index}
                    className="group bg-slate-50 rounded-lg p-3 border border-slate-200 hover:border-slate-300 transition-all duration-200"
                  >
                    <div className="flex gap-4">
                      <div className="relative">
                        <Image
                          src={cart.pImage || "/placeholder.svg"}
                          alt={`${cart?.pName}`}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover bg-white border border-slate-200"
                        />

                        <Badge
                          variant="secondary"
                          className="absolute -top-2 -right-2 text-xs bg-emerald-100 text-emerald-700 border-emerald-200"
                        >
                          Fresh
                        </Badge>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-900 mb-1 line-clamp-2">
                          {cart?.pName}
                        </h4>
                        <p className="text-lg font-bold text-emerald-600 ">
                          {currency}
                          {cart.price.toFixed(2)}
                        </p>

                        <div className="flex items-center justify-between">
                          <CartCounter cart={cart} />
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all duration-200"
                            onClick={() => dispatch(removeCart(cart?.product))}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Separator className="my-4" />

            {/* Order Summary */}
            <div className="space-y-4  bg-slate-50 rounded-xl p-4 mx-4 mb-8 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-3">
                Order Summary
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-medium">
                    {currency}
                    {totalCartPrice?.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Tax</span>
                  <span className="font-medium">
                    {currency}
                    {totalTax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Shipping</span>
                  <span className="font-medium">
                    {totalShipping > 0 ? (
                      <>
                        {currency}
                        {totalShipping.toFixed(2)}
                      </>
                    ) : (
                      <span className="text-emerald-600 font-semibold">
                        FREE
                      </span>
                    )}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-emerald-600">
                    {currency}
                    {(totalCartPrice + totalTax + totalShipping).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className=" grid grid-cols-2 gap-4 pb-5">
                <Link href={"/cart"}>
                  <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                    size="lg"
                  >
                    Cart
                  </Button>
                </Link>
                <Link href={"/checkout"}>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-slate-200 hover:border-slate-300 font-medium py-3 rounded-xl transition-all duration-200"
                    size="lg"
                  >
                    Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheets;

//  <Sheet
//       onOpenChange={() => dispatch(setCartSidebarOpen(!cartSidebarOpen))}
//       open={cartSidebarOpen}
//       key={"right"}
//     >
//       <SheetContent className="w-full px-0 py-0 res4:w-[400px]">
//         <div className="flex flex-col h-full">
//
//           <div className="flex-grow h-[calc(100vh-170px)] overflow-y-auto">
//             {carts?.length === 0 && <EmptyCartComponent />}
//             <ul className="divide-y divide-slate-200">
//               {carts?.map((cart, index) => {
//                 const findProduct = products?.find(
//                   (product) => product?._id === cart?.product
//                 );
//                 return (
//                   <li
//                     key={index}
//                     className="flex  hover:bg-gray-50 py-3 gap-3 px-3 items-center"
//                   >
//                     <div>
//                       <div className="relative w-[100px]">
//                         <button
//                           onClick={() => dispatch(removeCart(cart?.product))}
//                           className="absolute cursor-pointer flex items-center justify-center -top-1 -left-1 h-7 w-7 bg-white rounded-full shadow"
//                         >
//                           <Trash2 className="text-red-500" size={14} />
//                         </button>
//                         <Image
//                           src={findProduct?.featureImage?.image || ""}
//                           width={100}
//                           height={100}
//                           alt="Image"
//                           className="w-[100px] h-100px"
//                         />
//                       </div>
//                     </div>
//                     <div className="w-full">
//                       <Link
//                         href={"/"}
//                         className="block text-sm relative  text-black"
//                       >
//                         {findProduct?.name}
//                       </Link>
//                       <p className="text-xs my-[2px] text-gray-600">
//                         Product Price: {cart?.price}$
//                       </p>
//                       <div className="flex justify-between">
//                         <CartCounter cart={cart} />
//                         <span className="text-sm text-black">
//                           {cart?.price * cart?.quantity}$
//                         </span>
//                       </div>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//           <div className="px-3 py-3 border-t border-border">
//             <div className="h-[86px]">
//               <div className="flex items-center justify-between">
//                 <p className="text-gray-800">Sub Total</p>
//                 <p className="text-primary">
//                   {currency}
//                   {useTotalCartPrice()}
//                 </p>
//               </div>
//               <div className="flex gap-2 mt-3">
//                 <Link href={"/cart"} className="w-full">
//                   <Button className="w-full">Cart </Button>
//                 </Link>
//                 <Link href={"/checkout"} className="w-full">
//                   <Button className="w-full">Checkout</Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </SheetContent>
//     </Sheet>
