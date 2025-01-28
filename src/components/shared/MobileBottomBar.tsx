import { Home, Logs, Search, ShoppingCart, User } from "lucide-react";
import React from "react";

const MobileBottomBar = () => {
  return (
    <div className=" md:hidden bottom-0 sticky  left-0 right-0 z-50">
      <ul className=" flex items-center justify-between px-4 bg-white border-t ">
        <li className="py-3 inline-flex items-center justify-center flex-col px-2">
          <Logs size={16} />
          <p className="text-xs text-gray-500">Menu</p>
        </li>

        <li className="py-3 inline-flex items-center justify-center flex-col px-2">
          <Search size={16} />
          <p className="text-xs text-gray-500">Search</p>
        </li>
        <li className="py-3 inline-flex items-center justify-center flex-col px-2">
          <Home size={16} />
          <p className="text-xs text-gray-500">Home</p>
        </li>
        <li className="py-3 inline-flex items-center justify-center flex-col px-2">
          <ShoppingCart size={16} />
          <p className="text-xs text-gray-500">Cart</p>
        </li>
        <li className="py-3 inline-flex items-center justify-center flex-col px-2">
          <User size={16} />
          <p className="text-xs text-gray-500">Account</p>
        </li>
      </ul>
    </div>
  );
};

export default MobileBottomBar;
