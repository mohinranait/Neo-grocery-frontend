"use client";
import { Eye, EyeOff, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { userRegister } from "@/actions/authApi";
import { useRouter } from "next/navigation";
import axios from "axios";

export type TRegisterType = {
  name: { firstName: string; lastName: string };
  email: string;
  password: string;
};

const registerSchema = z.object({
  name: z.object({
    firstName: z
      .string()
      .nonempty({ message: "First name is required" })
      .min(2, { message: "First name must be 2 charecters" }),
    lastName: z
      .string()
      .nonempty({ message: "Last name is required" })
      .min(2, { message: "Last name must be 2 charecters" }),
  }),
  email: z
    .string()
    .nonempty({ message: "Email field is required" })
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be 5 charecters" })
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .trim()
    .nonempty({ message: "Password field is required" })
    .min(6, { message: "Passowrd must be at lest 6 charecters" })
    .max(20, { message: "Passowrd charecters limit is 20" }),
});

const RegisterForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TRegisterType>({
    resolver: zodResolver(registerSchema),
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // handle register
  const registerForm: SubmitHandler<TRegisterType> = async (data) => {
    try {
      const res = await userRegister(data);
      if (res?.success) {
        toast.success("Register success");
        router.push(`/verify/${res?.payload}`);
      } else {
        toast.success(res.message);
      }
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred";

      if (axios.isAxiosError(error)) {
        // Check if error response exists
        errorMessage = error.response?.data?.message || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast.error(errorMessage);
    }
  };
  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit(registerForm)}
        className="max-w-[350px] mx-auto"
      >
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
          <div className="grid  gap-3 md:grid-cols-2">
            <div className="">
              <Input
                type="text"
                {...register("name.firstName")}
                placeholder="First Name"
                className="focus-visible:outline-offset-0 focus-visible:ring-offset-0"
              />
              {errors.name?.firstName && (
                <p className="text-red-500 text-xs pt-1">
                  {errors.name?.firstName?.message}
                </p>
              )}
            </div>
            <div className="">
              <Input
                type="text"
                {...register("name.lastName")}
                placeholder="Last Name"
                className="focus-visible:outline-offset-0 focus-visible:ring-offset-0"
              />
              {errors.name?.lastName && (
                <p className="text-red-500 text-xs pt-1">
                  {errors.name?.lastName?.message}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <Input
              type="email"
              {...register("email")}
              placeholder="Email address"
              className="focus-visible:outline-offset-0 focus-visible:ring-offset-0"
            />
            {errors.email && (
              <p className="text-red-500 text-xs pt-1">
                {errors?.email?.message}
              </p>
            )}
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
                {...register("password")}
                className="focus-visible:outline-offset-0 focus-visible:ring-offset-0"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs pt-1">
                {errors?.password?.message}
              </p>
            )}
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
