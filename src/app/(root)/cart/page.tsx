import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartPage = () => {
  return (
    <section>
      <div className="container pb-10">
        <div></div>
        <div className="grid gap-3 grid-cols-3">
          <div className="col-span-2">
            <p className="text-lg font-medium">Your Basket</p>
            <ul className="space-y-3">
              <li className="border border-gray-200 flex bg-white gap-2 rounded">
                <div>
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
                    className="text-sm font-semibold inline-block hover:text-primary transition-all"
                    href={"/"}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    In, aliquid!
                  </Link>

                  <p className="uppercase text-xs text-gray-500 ">Explore</p>
                  <p className="text-xs text-gray-500">Red</p>
                  <p className="text-xs text-gray-500">500KG</p>
                  <hr className="mt-2" />
                  <div className="flex justify-between items-center py-2  w-full">
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
                </div>
              </li>
              <li className="border border-gray-200 flex bg-white gap-2 rounded">
                <div className="w-[100px]">
                  <Image
                    src={"/prod-2.webp"}
                    width={100}
                    height={100}
                    alt="Image"
                  />
                </div>
                <div className="pt-3 w-full pr-3">
                  <Link
                    className="text-sm font-semibold inline-block hover:text-primary transition-all"
                    href={"/"}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    In, aliquid!
                  </Link>

                  <p className="uppercase text-xs text-gray-500 ">Explore</p>
                  <p className="text-xs text-gray-500">Red</p>
                  <p className="text-xs text-gray-500">500KG</p>
                  <hr />
                  <div className="flex justify-between items-center py-2 w-full">
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
                </div>
              </li>
              <li className="border border-gray-200 flex bg-white gap-2 rounded">
                <div className="w-[100px]">
                  <Image
                    src={"/prod-2.webp"}
                    width={100}
                    height={100}
                    alt="Image"
                  />
                </div>
                <div className="pt-3 w-full pr-3">
                  <Link
                    className="text-sm font-semibold inline-block hover:text-primary transition-all"
                    href={"/"}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    In, aliquid!
                  </Link>

                  <p className="uppercase text-xs text-gray-500 ">Explore</p>
                  <p className="text-xs text-gray-500">Red</p>
                  <p className="text-xs text-gray-500">500KG</p>
                  <hr />
                  <div className="flex justify-between items-center py-2 w-full">
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
                </div>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
