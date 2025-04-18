import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const EmptyCartComponent = () => {
  return (
    <div className="flex h-full flex-col gap-6 justify-center items-center">
      <div>
        <Image
          src={"/shipping-cart.jpg"}
          width={150}
          height={150}
          alt="Shopping cart"
        />
      </div>
      <p className="text-lg text-gray-700 ">
        Your cart is <span className="text-main">Empty</span>{" "}
      </p>
      <p className="text-sm text-gray-500">
        Looks like you have not made your choice yet...
      </p>
      <div>
        <Link href="/shop">
          <Button type="button" className="bg-main text-white">
            Start Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCartComponent;
