"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { currency, generateRandomId } from "@/helpers/utils";
import useTotalCartPrice from "@/hooks/useTotalCartPrice";
import { setAllCarts } from "@/redux/features/shoppingCartSlice";
import { TOrderForm } from "@/types/order.type";
import { placeNewOrder } from "@/actions/orderApi";
import { useRouter } from "next/navigation";

const CheckoutComponent = () => {
  // Redux state
  const { carts } = useAppSelector((state) => state.cart);
  const { products } = useAppSelector((state) => state.product);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  // Local State
  const router = useRouter();
  const [forms, setForms] = useState({
    userId: "",
    addressId: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    postalCode: "",
    city: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>();

  // Validation function
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // If user not login
    if (!user || !user?._id) {
      // Check if firstName is not empty
      if (!forms.firstName) {
        newErrors.firstName = "First name is required";
      }

      // Check if lastName is not empty
      if (!forms.lastName) {
        newErrors.lastName = "Last name is required";
      }

      // Check if address is not empty
      if (!forms.address) {
        newErrors.address = "Address is required";
      }

      // Validate postal code (example: 5 digits)
      if (!forms.postalCode) {
        newErrors.postalCode = "Postal code is required";
      }

      // Check if city is not empty
      if (!forms.city) {
        newErrors.city = "City is required.";
      }
    }

    // Validate phone number (basic validation for length)
    if (!forms.phone || forms.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits.";
    }

    // Validate email (simple regex)
    // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // if (!forms.email || !emailRegex.test(forms.email)) {
    //   newErrors.email = "Please enter a valid email address.";
    // }

    // Update errors state
    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // handle order data
  const handleOrder = async () => {
    if (!validateForm()) return;

    let data: TOrderForm = {
      items: [],
      totalAmount: 0,
      uid: generateRandomId(8),
      email: forms?.email,
      phone: forms?.phone,
    };

    carts?.forEach((cart) => {
      const findProduct = products.find(
        (product) => product?._id === cart?.product
      );
      if (!findProduct) return;
      if (findProduct?.variant === "Single Product") {
        const pPrice = findProduct?.price?.sellPrice
          ? findProduct?.price?.sellPrice
          : findProduct?.price?.productPrice;
        if (pPrice !== cart?.price) {
          dispatch(setAllCarts([]));
          return;
        }
      }

      // Update form data
      data.totalAmount += cart?.price * cart?.quantity;
      data.items.push({
        ...cart,
        image: findProduct?.featureImage?.image,
        name: findProduct?.name,
      });
    });

    if (user?._id) {
      data.userId = user?._id;
    } else {
      data = {
        ...data,
        shippingAddress: {
          ...data.shippingAddress,
          firstName: forms?.firstName,
          lastName: forms?.lastName,
          address: forms?.address,
          postalCode: forms?.postalCode,
          city: forms?.city,
        },
      };
    }

    try {
      const getResponse = await placeNewOrder(data);
      if (getResponse?.success) {
        dispatch(setAllCarts([]));
        if (!user) {
          setForms({
            userId: "",
            addressId: "",
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            postalCode: "",
            city: "",
          });
        }
        router.push(`/order-success?code=${getResponse?.payload?.uid}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                  placeholder="Phone number"
                  value={forms?.phone}
                  onChange={(e) =>
                    setForms((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className={cn(
                    "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-main h-auto py-3"
                  )}
                />
                {errors?.phone && (
                  <p className="text-xs text-red-500 mt-[3px]">
                    {errors?.phone}
                  </p>
                )}
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
                      value={forms?.firstName}
                      onChange={(e) =>
                        setForms((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                    />
                    {errors?.firstName && (
                      <p className="text-xs text-red-500 mt-[3px]">
                        {errors?.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      className={cn(
                        "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-main h-auto py-3"
                      )}
                      value={forms?.lastName}
                      onChange={(e) =>
                        setForms((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                    />
                    {errors?.lastName && (
                      <p className="text-xs text-red-500 mt-[3px]">
                        {errors?.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Address"
                    className={cn(
                      "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-main h-auto py-3"
                    )}
                    value={forms?.address}
                    onChange={(e) =>
                      setForms((prev) => ({ ...prev, address: e.target.value }))
                    }
                  />
                  {errors?.address && (
                    <p className="text-xs text-red-500 mt-[3px]">
                      {errors?.address}
                    </p>
                  )}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="City"
                      className={cn(
                        "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-main h-auto py-3"
                      )}
                      value={forms?.city}
                      onChange={(e) =>
                        setForms((prev) => ({ ...prev, city: e.target.value }))
                      }
                    />
                    {errors?.city && (
                      <p className="text-xs text-red-500 mt-[3px]">
                        {errors?.city}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Postal Code"
                      className={cn(
                        "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-main h-auto py-3"
                      )}
                      value={forms?.postalCode}
                      onChange={(e) =>
                        setForms((prev) => ({
                          ...prev,
                          postalCode: e.target.value,
                        }))
                      }
                    />
                    {errors?.postalCode && (
                      <p className="text-xs text-red-500 mt-[3px]">
                        {errors?.postalCode}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <p className=" text-base mb-1 font-normal">Shipping method</p>
                  <div>
                    <div className="flex border-main border rounded-md items-center justify-between px-4 py-3 text-sm bg-white">
                      <span>Standard Shipping</span>
                      <span>$0</span>
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
                  {carts?.length > 0 &&
                    carts?.map((cart, index) => {
                      const findProduct = products?.find(
                        (product) => product?._id === cart?.product
                      );
                      return (
                        <li
                          key={index}
                          className="flex py-3 items-center gap-2"
                        >
                          <div>
                            <div className="w-[60px] relative">
                              <span className="w-5 h-5 text-white absolute -top-1 -right-1 rounded-full bg-slate-400 flex items-center justify-center text-sm">
                                {cart?.quantity}
                              </span>
                              <Image
                                src={findProduct?.featureImage?.image || ""}
                                width={100}
                                height={100}
                                alt="img"
                                className="w-[60px] h-[60px] p-2 rounded border border-slate-200"
                              />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <p className="text-[15px] text-slate-800 font-medium leading-[17px]">
                              {findProduct?.name}
                            </p>
                          </div>
                          <div>
                            <div className="w-[60px] ">
                              <p className="text-right text-slate-800">
                                {currency}
                                {cart?.price}{" "}
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </li>
              <li className="flex py-4 justify-between items-center">
                <span>Subtotal</span>
                <span>
                  {currency}
                  {useTotalCartPrice()}{" "}
                </span>
              </li>
              <li className="flex py-4 justify-between items-center">
                <span>Shipping</span>
                <span>0%</span>
              </li>
              <li className="flex py-4 justify-between items-center">
                <span>Total</span>
                <span>
                  {currency}
                  {useTotalCartPrice()}
                </span>
              </li>
              <li className=" py-4 space-y-4">
                <Button
                  onClick={handleOrder}
                  className="w-full bg-main text-white "
                  size={"lg"}
                >
                  Order Now
                </Button>

                <Link href={"/"}>
                  <Button className="w-full  " variant={"link"} size={"lg"}>
                    Continue Shopping
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
