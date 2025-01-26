"use client";
import { Eye, EyeOff, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <React.Fragment>
      <form action="" className="max-w-[350px] mx-auto">
        <div>
          <div className="flex mb-3 justify-center">
            <Link href={"/"} className="inline-flex items-center">
              <span className="w-9 h-9 rounded bg-main flex items-center justify-center">
                <ShoppingBagIcon className="text-white" size={20} />
              </span>
              <span className="text-3xl font-bold text-primary">Shop</span>
            </Link>
          </div>
          <p className="text-center mb-2 text-primary font-bold text-4xl">
            Wellcome Back
          </p>
          <p className="text-center  text-gray-500 text-sm">
            Please provide your valid information for your account
          </p>
        </div>
        <div className="mt-4 mb-6  space-y-5">
          <div className="">
            <Input type="text" placeholder="Full Name" />
          </div>
          <div className="">
            <Input type="text" placeholder="Email address" />
          </div>
          <div>
            <div className="relative">
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2/4 right-2 cursor-pointer  -translate-y-2/4"
              >
                {showPassword ? (
                  <EyeOff size={18} className="text-gray-600" />
                ) : (
                  <Eye size={18} className="text-gray-600" />
                )}
              </span>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
            </div>
          </div>
        </div>
        <div>
          <Button className="w-full">Register</Button>
        </div>
      </form>
      <div className="mt-4">
        <p className="text-sm text-gray-500 text-center">
          Already have an account?{" "}
          <Link href={"/login"} className="underline hover:text-main">
            Login
          </Link>{" "}
        </p>
      </div>
    </React.Fragment>
  );
};

export default RegisterForm;
