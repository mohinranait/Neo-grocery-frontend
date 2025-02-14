import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartPage = () => {
  return (
    <section>
      <div className="container pb-10">
        <div className="py-4">
          <p className="text-2xl text-gray-800 font-semibold">Your Basket</p>
          <p className="text-base text-gray-500 font-medium">Shopping cart</p>
        </div>
        <div className="grid md:grid-cols-2  gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <div className="py-4 px-4 rounded bg-white border border-slate-200">
              <p className="text-gray-800 mb-1">
                Free shipping delivery{" "}
                <span className="text-main">1000 BDT</span>{" "}
              </p>
              <div className="w-full bg-gray-200 rounded-3xl relative h-2">
                <span className="absolute -top-6 right-0 ">60%</span>
                <div className="w-[60%] bg-main h-2 rounded-3xl"></div>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="border border-gray-200 grid grid-cols-[100px_auto]  bg-white gap-2 rounded">
                <div className="relative res6:row-span-2 md:row-span-1 res9:row-span-2 ">
                  <button className="absolute cursor-pointer flex items-center justify-center -top-1 -left-1 h-7 w-7 bg-white rounded-full shadow">
                    <X className="text-gray-500" size={14} />
                  </button>
                  <div className="w-[100px]">
                    <Image
                      src={"/prod-2.webp"}
                      width={100}
                      height={100}
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="pt-3 w-full pr-3">
                  <Link
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 inline-block hover:text-primary transition-all"
                    href={"/"}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    In, aliquid!
                  </Link>

                  <p className="uppercase text-xs text-gray-500 ">Explore</p>
                  <ul>
                    <li className="text-xs text-gray-500 before:w-[6px] before:h-[6px] before:rounded-full before:bg-black before:absolute before:-translate-y-2/4 pl-3 before:left-0 before:top-2/4 relative">
                      Red
                    </li>
                    <li className="text-xs text-gray-500 before:w-[6px] before:h-[6px] before:rounded-full before:bg-black before:absolute before:-translate-y-2/4 pl-3 before:left-0 before:top-2/4 relative">
                      5KG
                    </li>
                  </ul>
                </div>
                <div className="flex col-span-2 res6:col-span-1 md:col-span-2 res9:col-span-1 justify-between items-center py-2 px-4 res6:pl-0 md:px-4 res9:pl-0 w-full">
                  <div className="flex items-center gap-3">
                    <p>Qty</p>
                    <div>
                      <div className="inline-flex gap-1 items-center">
                        <button className="w-7 h-7 rounded-full border border-border flex items-center justify-center cursor-pointer">
                          <Minus size={15} />
                        </button>
                        <span className="px-[6px] py-[3px] text-sm">5</span>
                        <button className="w-7 h-7 rounded-full border border-border flex items-center justify-center cursor-pointer">
                          <Plus size={15} />
                        </button>
                      </div>
                    </div>
                    <p>200 BDT</p>
                  </div>
                  <p className="text-gray-800 font-semibold">1000 BDT</p>
                </div>
              </li>
              <li className="border border-gray-200 grid grid-cols-[100px_auto]  bg-white gap-2 rounded">
                <div className="relative res6:row-span-2 md:row-span-1 res9:row-span-2 ">
                  <button className="absolute cursor-pointer flex items-center justify-center -top-1 -left-1 h-7 w-7 bg-white rounded-full shadow">
                    <X className="text-gray-500" size={14} />
                  </button>
                  <div className="w-[100px]">
                    <Image
                      src={"/prod-2.webp"}
                      width={100}
                      height={100}
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="pt-3 w-full pr-3">
                  <Link
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 inline-block hover:text-primary transition-all"
                    href={"/"}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    In, aliquid!
                  </Link>

                  <p className="uppercase text-xs text-gray-500 ">Explore</p>
                  <ul>
                    <li className="text-xs text-gray-500 before:w-[6px] before:h-[6px] before:rounded-full before:bg-black before:absolute before:-translate-y-2/4 pl-3 before:left-0 before:top-2/4 relative">
                      Red
                    </li>
                    <li className="text-xs text-gray-500 before:w-[6px] before:h-[6px] before:rounded-full before:bg-black before:absolute before:-translate-y-2/4 pl-3 before:left-0 before:top-2/4 relative">
                      5KG
                    </li>
                  </ul>
                </div>
                <div className="flex col-span-2 res6:col-span-1 md:col-span-2 res9:col-span-1 justify-between items-center py-2 px-4 res6:pl-0 md:px-4 res9:pl-0 w-full">
                  <div className="flex items-center gap-3">
                    <p>Qty</p>
                    <div>
                      <div className="inline-flex gap-1 items-center">
                        <button className="w-7 h-7 rounded-full border border-border flex items-center justify-center cursor-pointer">
                          <Minus size={15} />
                        </button>
                        <span className="px-[6px] py-[3px] text-sm">5</span>
                        <button className="w-7 h-7 rounded-full border border-border flex items-center justify-center cursor-pointer">
                          <Plus size={15} />
                        </button>
                      </div>
                    </div>
                    <p>200 BDT</p>
                  </div>
                  <p className="text-gray-800 font-semibold">1000 BDT</p>
                </div>
              </li>
              <li className="border border-gray-200 grid grid-cols-[100px_auto]  bg-white gap-2 rounded">
                <div className="relative res6:row-span-2 md:row-span-1 res9:row-span-2 ">
                  <button className="absolute cursor-pointer flex items-center justify-center -top-1 -left-1 h-7 w-7 bg-white rounded-full shadow">
                    <X className="text-gray-500" size={14} />
                  </button>
                  <div className="w-[100px]">
                    <Image
                      src={"/prod-2.webp"}
                      width={100}
                      height={100}
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="pt-3 w-full pr-3">
                  <Link
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 inline-block hover:text-primary transition-all"
                    href={"/"}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    In, aliquid!
                  </Link>

                  <p className="uppercase text-xs text-gray-500 ">Explore</p>
                  <ul>
                    <li className="text-xs text-gray-500 before:w-[6px] before:h-[6px] before:rounded-full before:bg-black before:absolute before:-translate-y-2/4 pl-3 before:left-0 before:top-2/4 relative">
                      Red
                    </li>
                    <li className="text-xs text-gray-500 before:w-[6px] before:h-[6px] before:rounded-full before:bg-black before:absolute before:-translate-y-2/4 pl-3 before:left-0 before:top-2/4 relative">
                      5KG
                    </li>
                  </ul>
                </div>
                <div className="flex col-span-2 res6:col-span-1 md:col-span-2 res9:col-span-1 justify-between items-center py-2 px-4 res6:pl-0 md:px-4 res9:pl-0 w-full">
                  <div className="flex items-center gap-3">
                    <p>Qty</p>
                    <div>
                      <div className="inline-flex gap-1 items-center">
                        <button className="w-7 h-7 rounded-full border border-border flex items-center justify-center cursor-pointer">
                          <Minus size={15} />
                        </button>
                        <span className="px-[6px] py-[3px] text-sm">5</span>
                        <button className="w-7 h-7 rounded-full border border-border flex items-center justify-center cursor-pointer">
                          <Plus size={15} />
                        </button>
                      </div>
                    </div>
                    <p>200 BDT</p>
                  </div>
                  <p className="text-gray-800 font-semibold">1000 BDT</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="border rounded p-4 bg-white">
              <div className="space-y-3">
                <p className="py-3 text-center text-sm uppercase px-4 rounded bg-red-50 text-red-500">
                  Unregisterd Account
                </p>
                <div className="">
                  <p className="text-gray-700 font-semibold">
                    Free Delivery for <span className="text-main ">1000%</span>{" "}
                  </p>
                </div>
              </div>
              <div className=" py-4 ">
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Order Summery</span>
                    <span className="text-sm text-gray-800">$585400</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Tax</span>
                    <span className="text-sm text-gray-800">$400</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Additional Service
                    </span>
                    <span className="text-sm text-gray-800">$585400</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-base font-semibold text-gray-600">
                      Total amount
                    </span>
                    <span className="text-base font-semibold text-gray-800">
                      $585400
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-5">
                <Button className="w-full">Order Now</Button>
                <Button className="w-full" variant={"link"}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7 container">
        <div className="box">
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-2 lg:gap-5">
            <div className="md:col-span-1 lg:col-span-2  ">
              <div className="mb-4">
                <p className="text-xl font-bold text-gray-900 ">Delivery</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex items-center gap-4 bg-white rounded-md px-5 py-10">
                  <div>
                    <img
                      className="w-[120px]"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/DPD_logo_%282015%29.svg/2560px-DPD_logo_%282015%29.svg.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-800">
                      DPD delivery
                    </p>
                    <p className="text-sm font-semibold text-gray-500">
                      Exponend delivery founding
                    </p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-bold ">$20</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-md px-5 py-6">
                  <div>
                    <img
                      className="w-[120px]"
                      src="https://assets.turbologo.com/blog/en/2019/12/19084817/Fedex-logo.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-800">
                      FedEx delivery
                    </p>
                    <p className="text-sm font-semibold text-gray-500">
                      Exponend delivery founding
                    </p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-bold ">$20</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-md px-5 py-6">
                  <div>
                    <img
                      className="w-[120px] "
                      src="https://allvectorlogo.com/img/2021/12/ups-logo-vector.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-800">
                      UPS delivery
                    </p>
                    <p className="text-sm font-semibold text-gray-500">
                      Exponend delivery founding
                    </p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-bold ">$20</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-md px-5 py-6">
                  <div>
                    <img
                      className="w-[120px] "
                      src="https://www.redx.com/wp-content/uploads/OnlyArtboard-6Logo.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-800">
                      RedX delivery
                    </p>
                    <p className="text-sm font-semibold text-gray-500">
                      Exponend delivery founding
                    </p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-bold ">$20</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <p className="text-xl font-bold text-gray-900 ">
                  Another Services
                </p>
              </div>
              <div>
                <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
                  <li className="bg-white rounded-md py-3 px-5 flex justify-between gap-4 items-center">
                    <div>
                      <p className="text-gray-800 font-semibold text-xl">
                        Cash on delivery
                      </p>
                      <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-bold ">$20</p>
                    </div>
                  </li>
                  <li className="bg-white rounded-md py-3 px-5 flex justify-between gap-4 items-center">
                    <div>
                      <p className="text-gray-800 font-semibold text-xl">
                        Home delivery
                      </p>
                      <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-bold ">$20</p>
                    </div>
                  </li>
                  <li className="bg-white rounded-md py-3 px-5 flex justify-between gap-4 items-center">
                    <div>
                      <p className="text-gray-800 font-semibold text-xl">
                        Recive Office
                      </p>
                      <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-bold text-gray-600">
                        Free
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
