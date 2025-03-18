import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getSingleOrderByUid } from "@/actions/orderApi";
import { currency } from "@/helpers/utils";
import { TEnhancedCartItem } from "@/types/order.type";

const OrderSuccessPage = async ({
  searchParams,
}: {
  searchParams: { code?: string };
}) => {
  const orderCode = searchParams?.code;
  if (!orderCode) return;

  const data = await getSingleOrderByUid(orderCode);

  return (
    <div>
      <div className="container px-2 md:px-0 min-h-screen  ">
        <div className="max-w-[550px] space-y-5 mx-auto my-10">
          <div>
            <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto">
              <Check size={30} />
            </div>
          </div>
          <div className="">
            <h1 className="mb-3 text-center text-2xl lg:text-3xl font-bold text-slate-800">
              Thank you for your purchase
            </h1>
            <p className="text-center text-slate-600 ">
              We have received your order will ship in 5-7 days.{" "}
            </p>
            <p className="text-center text-slate-600 ">
              Your order number is{" "}
              <span className="font-semibold text-slate-800">#{orderCode}</span>
            </p>
          </div>
          <div className="bg-white border border-slate-100 rounded-md ">
            <div className="px-4 pt-4 flex justify-between">
              <p className="text-lg font-semibold mb-2">Order summary</p>
            </div>
            <ul className="px-4 divide-y divide-slate-200 ">
              {data.payload?.items?.map(
                (cart: TEnhancedCartItem, index: number) => {
                  return (
                    <li
                      key={index}
                      className="flex gap-7 justify-between py-3 items-center"
                    >
                      <div className="flex items-center  gap-2 md:gap-3 relative">
                        <Image
                          src={cart?.image}
                          width={60}
                          height={60}
                          alt="images"
                          className="w-[60px] border border-slate-200 h-[60px] p-1 rounded "
                        />
                        <p className="text-slate-700 text-sm md:text-base leading-5">
                          {cart?.name}
                        </p>
                      </div>
                      <div className="w-[100px] text-right text-lg">
                        {currency}
                        {cart?.price * cart?.quantity}
                      </div>
                    </li>
                  );
                }
              )}

              <li className="flex justify-between py-3 items-center">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-lg font-semibold">
                  {currency}
                  {data.payload?.items?.reduce(
                    (acc: number, curr: TEnhancedCartItem) =>
                      acc + curr?.price * curr?.quantity,
                    0
                  )}
                </p>
              </li>
            </ul>
          </div>
          <div className="flex justify-between">
            <Link href="/">
              <Button variant={"outline"}>Back to Home</Button>
            </Link>
            <Link href="/">
              <Button variant={"outline"}>Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
