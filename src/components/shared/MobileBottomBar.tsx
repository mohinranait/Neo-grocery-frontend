"use client";
import { Home, ShoppingCart, Store, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import MobileMenuSheet from "../sheets/MobileMenuSheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import ShopFilterSheet from "../sheets/ShopFilterSheet";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setCartSidebarOpen } from "@/redux/features/uiSlice";

const MobileBottomBar = () => {
  // Redux state
  const { carts } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const pathName = usePathname();

  return (
    <div className=" md:hidden bottom-0 sticky  left-0 right-0 z-50">
      <ul className=" flex items-center justify-between px-4 bg-white border-t ">
        {/* Mobile Menus */}
        <MobileMenuSheet />
        {pathName?.includes("shop") ? (
          <ShopFilterSheet />
        ) : (
          <Link
            href={"/shop"}
            className="py-3 inline-flex items-center justify-center flex-col px-2"
          >
            <Store size={16} className="text-gray-500" />
            <p className="text-xs text-gray-500">Store</p>
          </Link>
        )}
        <Link
          href={"/"}
          className="py-3 inline-flex items-center justify-center flex-col px-2"
        >
          <Home size={16} className="text-gray-500" />
          <p className="text-xs text-gray-500">Home</p>
        </Link>

        <li
          onClick={() => dispatch(setCartSidebarOpen(true))}
          className="py-3 cursor-pointer inline-flex items-center justify-center flex-col relative px-2"
        >
          <span className="px-1 text-[10px] md:text-xs font-semibold text-white rounded-full bg-main absolute top-[2px] right-0 md:-top-1 md:-right-1">
            {carts?.length || 0}
          </span>
          <ShoppingCart className="md:hidden text-gray-500" size={16} />
          <p className="text-xs text-gray-500">Cart</p>
        </li>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <li className="py-3 inline-flex items-center justify-center flex-col px-2">
              <UserRound size={16} className="text-gray-500" />
              <p className="text-xs text-gray-500">Account</p>
            </li>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" key={"right"}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
            <DropdownMenuItem>Favorites</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ul>
    </div>
  );
};

export default MobileBottomBar;
