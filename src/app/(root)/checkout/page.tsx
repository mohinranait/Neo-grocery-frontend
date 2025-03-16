import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CheckoutPage = () => {
  return (
    <div className="py-10">
      <div className="container px-2 md:px-0 xl:max-w-[1100px]  min-h-screen grid  lg:grid-cols-[auto_400px] gap-5">
        <div className="">
          <div className="space-y-4">
            <div>
              <p className="flex justify-between items-center text-lg mb-1 font-semibold">
                Contact{" "}
                <Link
                  className="text-sm text-main underline font-normal"
                  href={"/login"}
                >
                  Log In
                </Link>{" "}
              </p>
              <div>
                <Input
                  type="text"
                  placeholder="Email Or Phone"
                  className={cn(
                    "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-main h-auto py-3"
                  )}
                />
                <div className="flex items-center mt-2 space-x-2">
                  <Checkbox id="give_me_email" />
                  <label
                    htmlFor="give_me_email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email me with news and offers
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p className=" text-lg mb-1 font-semibold">Delivery</p>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="First Name"
                      className={cn(
                        "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-main h-auto py-3"
                      )}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      className={cn(
                        "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-main h-auto py-3"
                      )}
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Address"
                    className={cn(
                      "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-main h-auto py-3"
                    )}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="City"
                      className={cn(
                        "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-main h-auto py-3"
                      )}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Postal Code"
                      className={cn(
                        "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-main h-auto py-3"
                      )}
                    />
                  </div>
                </div>
                <div>
                  <p className=" text-base mb-1 font-normal">Shipping method</p>
                  <div>
                    <div className="flex border-main border rounded-md items-center justify-between px-4 py-3 text-sm bg-white">
                      <span>Standard Shipping</span>
                      <span>10$</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-lg  font-semibold">Payment</p>
                <p className=" text-slate-600 text-base mb-1 font-normal">
                  All transactions are secure and encrypted.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex border-main border rounded-md items-center justify-between px-4 py-3 text-sm bg-white">
                    <span>Cash on Delivery (COD)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border bg-white border-slate-200 rounded-md">
            <div className="flex py-3 pt-4 px-4 justify-between items-center">
              <p>Product </p>
              <p>Subtotal</p>
            </div>
            <ul className="px-4 divide-y  divide-slate-200">
              <li>
                <ul className=" divide-y  divide-slate-200">
                  <li className="flex py-3 items-center gap-2">
                    <div>
                      <div className="w-[60px]">
                        <Image
                          src={"/prod-2.webp"}
                          width={100}
                          height={100}
                          alt="img"
                          className="w-[60px] h-[60px] p-2 rounded border border-slate-200"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-[15px] text-slate-800 font-medium leading-[17px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                    <div>
                      {" "}
                      <div className="w-[60px] ">
                        <p className="text-right text-slate-800">1 X $10 </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex py-3 items-center gap-2">
                    <div>
                      <div className="w-[60px]">
                        <Image
                          src={"/prod-2.webp"}
                          width={100}
                          height={100}
                          alt="img"
                          className="w-[60px] h-[60px] p-2 rounded border border-slate-200"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-[15px] text-slate-800 font-medium leading-[17px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                    <div>
                      {" "}
                      <div className="w-[60px] ">
                        <p className="text-right text-slate-800">1 X $10 </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex py-3 items-center gap-2">
                    <div>
                      <div className="w-[60px]">
                        <Image
                          src={"/prod-2.webp"}
                          width={100}
                          height={100}
                          alt="img"
                          className="w-[60px] h-[60px] p-2 rounded border border-slate-200"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-[15px] text-slate-800 font-medium leading-[17px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                    <div>
                      {" "}
                      <div className="w-[60px] ">
                        <p className="text-right text-slate-800">1 X $10 </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="flex py-4 justify-between items-center">
                <span>Subtotal</span>
                <span>10%</span>
              </li>
              <li className="flex py-4 justify-between items-center">
                <span>Shipping</span>
                <span>10%</span>
              </li>
              <li className="flex py-4 justify-between items-center">
                <span>Total</span>
                <span>10%</span>
              </li>
              <li className=" py-4 space-y-4">
                <Button className="w-full bg-main text-white " size={"lg"}>
                  Order Now
                </Button>
                <Button className="w-full  " variant={"link"} size={"lg"}>
                  Continue Shopping
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
