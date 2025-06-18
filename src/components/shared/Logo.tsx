import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className="inline-flex items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-main text-white p-2 rounded-lg">
            <span className="text-xl font-bold">
              <ShoppingCart />{" "}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-emerald-600">FreshMart</h1>
            <p className="text-xs text-gray-500">Your Fresh Store</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Logo;
