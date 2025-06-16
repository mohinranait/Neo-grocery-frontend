"use client";
import React, { useEffect, useState } from "react";
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
import {
  createAddressByAuthUser,
  getAllAddressByAuthUser,
} from "@/actions/addressApi";
import { TAddress } from "@/types/address.type";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Home, MapPin, Phone, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import GlobalModal from "@/components/shared/GlobalModal";

const CheckoutComponent = () => {
  // Redux state
  const { carts } = useAppSelector((state) => state.cart);
  const { products } = useAppSelector((state) => state.product);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  // Local State
  const router = useRouter();
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [userAddress, setUserAddress] = useState<TAddress[]>([]);
  const [address, setAddress] = useState({
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
      if (!address.firstName) {
        newErrors.firstName = "First name is required";
      }

      // Check if lastName is not empty
      if (!address.lastName) {
        newErrors.lastName = "Last name is required";
      }

      // Check if address is not empty
      if (!address.address) {
        newErrors.address = "Address is required";
      }

      // Validate postal code (example: 5 digits)
      if (!address.postalCode) {
        newErrors.postalCode = "Postal code is required";
      }

      // Check if city is not empty
      if (!address.city) {
        newErrors.city = "City is required.";
      }
    }

    // Validate phone number (basic validation for length)
    if (!address.phone || address.phone.length < 10) {
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

    let order: TOrderForm = {
      items: [],
      totalAmount: 0,
      uid: generateRandomId(8),
      email: address?.email,
      phone: address?.phone,
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
      order.totalAmount += cart?.price * cart?.quantity;
      order.items.push({
        ...cart,
        image: findProduct?.featureImage?.image,
        name: findProduct?.name,
      });
    });

    const addressData = {
      firstName: address?.firstName,
      lastName: address?.lastName,
      phone: address?.phone,
      address: address?.address,
      postalCode: address?.postalCode,
      city: address?.city,
    };

    if (user?._id) {
      order.userId = user?._id;
    } else {
      order = {
        ...order,
        shippingAddress: {
          ...order.shippingAddress,
          userId: "",
          ...addressData,
        },
      };
    }

    // As a first time create new address for shipping
    if (order?.userId && userAddress?.length === 0) {
      const newAddress = {
        ...addressData,
        userId: user?._id as string,
      };
      const resData = await createAddressByAuthUser({
        addressData: newAddress,
      });
      order.shippingAddressId = resData?.payload?._id;
    }

    try {
      const getResponse = await placeNewOrder(order);
      if (getResponse?.success) {
        dispatch(setAllCarts([]));
        if (!user) {
          setAddress({
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

  useEffect(() => {
    (async function () {
      try {
        const data = await getAllAddressByAuthUser();
        const address = data?.payload?.address;
        setUserAddress(address);
        if (data.success) {
        }
      } catch (error) {
        console.log({ error });
      }
    })();
  }, []);

  return (
    <div className="py-10">
      <div className="container px-2 md:px-0 xl:max-w-[1100px]  min-h-screen grid  lg:grid-cols-[auto_400px] gap-5">
        <div className="">
          <div className="space-y-4">
            {userAddress?.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {userAddress?.map((address, index) => {
                  return (
                    <Card
                      key={index}
                      className="w-full gap-0 p-0 mx-auto bg-white shadow-sm border border-gray-200"
                    >
                      <CardHeader className=" py-3 px-4 pb-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                              <Home className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">
                                Home
                              </span>
                              <Badge
                                variant={"default"}
                                className="bg-orange-100 rounded py-1 text-orange-700 hover:bg-orange-100"
                              >
                                Selected Address
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="px-4 py-3 space-y-4">
                        <div>
                          <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            {address?.firstName} {address?.lastName}
                          </h2>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                            <div className="text-sm text-gray-600 leading-relaxed">
                              {address?.address}
                              {", "} {address?.city}
                              {", "}
                              {address?.postalCode}
                              <br />
                              United States
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">
                              {address?.phone}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            Shipping
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
                <Card
                  onClick={() => setIsAddressOpen(true)}
                  className="w-full max-w-md mx-auto bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <CardContent className="flex flex-col items-center justify-center py-12 px-6">
                    <Button
                      size="lg"
                      className="w-12 h-12 rounded-full bg-black hover:bg-gray-800 mb-6 p-0"
                    >
                      <Plus className="w-6 h-6 text-white" />
                    </Button>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                      Add New Address
                    </h3>

                    <p className="text-sm text-gray-500 text-center">
                      Add a shipping or billing address
                    </p>
                  </CardContent>
                </Card>
              </div>
            ) : (
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
                    value={address?.phone}
                    onChange={(e) =>
                      setAddress((prev) => ({ ...prev, phone: e.target.value }))
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
                          value={address?.firstName}
                          onChange={(e) =>
                            setAddress((prev) => ({
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
                          value={address?.lastName}
                          onChange={(e) =>
                            setAddress((prev) => ({
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
                        value={address?.address}
                        onChange={(e) =>
                          setAddress((prev) => ({
                            ...prev,
                            address: e.target.value,
                          }))
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
                          value={address?.city}
                          onChange={(e) =>
                            setAddress((prev) => ({
                              ...prev,
                              city: e.target.value,
                            }))
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
                          value={address?.postalCode}
                          onChange={(e) =>
                            setAddress((prev) => ({
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
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <p className=" text-base mb-1 font-normal">Shipping method</p>

                <div className="flex border-main border rounded-md items-center justify-between px-4 py-3 text-sm bg-white">
                  <span>Standard Shipping</span>
                  <span>$0</span>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-semibold">Payment</p>
                <p className=" text-slate-600 text-base mb-1 font-normal">
                  All transactions are secure and encrypted.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex border-main border rounded-md items-center justify-between px-4 py-3 text-sm bg-white">
                  <span>Cash on Delivery (COD)</span>
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

      <GlobalModal
        open={isAddressOpen}
        setOpen={setIsAddressOpen}
        className="w-[550px] md:w-[550px] lg:w-[550px]"
        withFooter={
          <div className="flex gap-2 items-center">
            <Button>Save & Close</Button>
          </div>
        }
        subTitle={`Select s to update from the series.`}
        title={`Update recurring `}
      >
        asdf
      </GlobalModal>
    </div>
  );
};

export default CheckoutComponent;
