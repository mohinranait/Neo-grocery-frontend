import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="inline-flex items-center">
      <span className="w-9 h-9 rounded bg-main flex items-center justify-center">
        <ShoppingBagIcon className="text-white" size={20} />
      </span>
      <span className="text-3xl font-bold text-primary">Shop</span>
    </Link>
  );
};

export default Logo;
