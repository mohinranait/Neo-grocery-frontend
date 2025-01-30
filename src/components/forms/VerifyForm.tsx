"use client";
import React, { FC } from "react";
import { Button } from "../ui/button";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyEmailAccount } from "@/actions/authApi";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export type TVerifyEmailType = {
  token: string;
  code: string;
};

const verifySchema = z.object({
  code: z
    .string()
    .trim()
    .nonempty({ message: "Give me verify code (Check Email)" })
    .min(4, { message: "Enter 4 character code" })
    .max(4, { message: "Enter 4character code" }),
});
type Props = {
  token: string;
};
const VerifyForm: FC<Props> = ({ token }) => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TVerifyEmailType>({
    resolver: zodResolver(verifySchema),
  });

  const onSubmit: SubmitHandler<TVerifyEmailType> = async (data) => {
    try {
      const res = await verifyEmailAccount({ ...data, token });
      if (res?.success) {
        toast.success("Verify successfull");
        router.push("/login");
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[350px] mx-auto">
      <div>
        <p className="text-center mb-2 text-primary font-bold text-3xl">
          Verify Eamil
        </p>
        <p className="text-center  text-gray-500 text-sm">
          Please check your email account and provide 4 digit code
        </p>
      </div>
      <div className="mt-4 mb-6  space-y-5">
        <div className="">
          <Input
            type="text"
            {...register("code")}
            placeholder="4 Digit verify code"
            className="focus-visible:outline-offset-0 focus-visible:ring-offset-0"
          />
          {errors.code && (
            <p className="text-red-500 text-xs pt-1">{errors.code.message}</p>
          )}
        </div>
      </div>
      <div>
        <Button className="w-full">Verify</Button>
      </div>
    </form>
  );
};

export default VerifyForm;
