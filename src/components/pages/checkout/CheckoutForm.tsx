import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppSelector } from "@/hooks/useRedux";
import Link from "next/link";
import { TAddress } from "@/types/address.type";

type CheckoutFormProps = {
  errors: Record<string, string> | undefined;
  address: TAddress;
  setAddress: React.Dispatch<React.SetStateAction<TAddress>>;
};
const CheckoutForm = ({ errors, address, setAddress }: CheckoutFormProps) => {
  // Redux state
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // Local state

  return (
    <div>
      <p className="flex  justify-between items-center text-lg mb-1 font-semibold">
        Contact{" "}
        {!isAuthenticated && (
          <Link
            className="text-sm text-main underline font-normal"
            href={"/login"}
          >
            Log In
          </Link>
        )}
      </p>
      <div className="mb-4">
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
          <p className="text-xs text-red-500 mt-[3px]">{errors?.phone}</p>
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
              <p className="text-xs text-red-500 mt-[3px]">{errors?.address}</p>
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
                <p className="text-xs text-red-500 mt-[3px]">{errors?.city}</p>
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
            <div>
              <Label>Select Pickup point</Label>
              <Select
                value={address?.type}
                onValueChange={(e) =>
                  setAddress((prev) => ({
                    ...prev,
                    type: e as "Home" | "Office" | "Others",
                  }))
                }
              >
                <SelectTrigger className="focus-visible:outline focus-visible:ring-0">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Home">Home</SelectItem>
                    <SelectItem value="Office">Office</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
