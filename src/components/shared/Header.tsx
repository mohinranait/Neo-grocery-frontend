"use client";
import {
  ChevronDown,
  Heart,
  Menu,
  Phone,
  Search,
  Shield,
  ShoppingCart,
  Truck,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Logo from "./Logo";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { logoutUser } from "@/redux/features/authSlice";
import { userLogout } from "@/actions/authApi";
import HeaderBrowsCategory from "../utils/HeaderBrowsCategory";
import { setCartSidebarOpen } from "@/redux/features/uiSlice";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const Header = () => {
  // Redux state
  const { carts } = useAppSelector((state) => state.cart);
  const { favorites } = useAppSelector((state) => state.favorite);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Local state
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const pathName = usePathname();
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");

  // handle logout
  const handleLogout = async () => {
    try {
      const res = await userLogout();
      console.log({ res });
      dispatch(logoutUser());
    } catch (error) {
      console.log({ error });
    }
  };

  // handle search
  const handleSearch = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.push(`/shop?${params.toString()}`);
  }, [search, searchParams, router]);

  useEffect(() => {
    setOpenCategory(false);
  }, [pathName]);
  return (
    <div className="bg-white">
      {/* Top Bar */}
      <div className="bg-main text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <div className="flex items-center gap-2">
              <Truck className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-center sm:text-left">
                Free delivery on orders over 500 BDT
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>100% Fresh Guarantee</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-medium text-xs sm:text-sm">
              Contact: (+88) 01728068200
            </span>
          </div>
        </div>
      </div>
      <header>
        <div className="border-b bg-white border-gray-100 shadow-lg">
          <div className="px-2 md:px-0 container justify-between h-[60px]  md:h-[80px] flex items-center ">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Logo />
            </div>

            {/* Middle column */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              {/* Desktop Search */}
              <div className="relative w-full">
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  placeholder="Search for fresh products, organic foods..."
                  className="w-full pl-4 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 py-[14px] h-auto  rounded-full border-2  border-gray-200   focus-visible:border-main   transition-all duration-200 text-base pr-20"
                />
                <Button
                  size="sm"
                  type="button"
                  onClick={handleSearch}
                  className="absolute  py-5 h-auto right-2 top-2/4 -translate-y-2/4 bottom-1 px-8 rounded-full bg-main hover:bg-main-light shadow-md"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                <li className=" md:hidden rounded-full h-10 w-10 inline-flex items-center justify-center relative">
                  <button
                    type="button"
                    onClick={() => setMobileSearch((prev) => !prev)}
                    className="w-10 cursor-pointer h-10 relative flex items-center justify-center rounded-full "
                  >
                    <Search size={24} className="text-gray-600" />
                  </button>
                </li>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <li className=" hidden  rounded-full h-10 w-10 md:inline-flex items-center justify-center relative">
                      <div className="w-10 cursor-pointer h-10 relative flex items-center justify-center rounded-full ">
                        <UserRound size={24} className="text-gray-600" />
                      </div>
                    </li>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {isAuthenticated ? (
                      <>
                        <Link href={"/dashboard"}>
                          <DropdownMenuItem className="cursor-pointer">
                            Dashboard
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem
                          className="cursor-pointer"
                          onClick={() => handleLogout()}
                        >
                          Logout
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <Link href={"/login"}>
                          <DropdownMenuItem className="cursor-pointer">
                            Login
                          </DropdownMenuItem>
                        </Link>
                        <Link href={"/register"}>
                          <DropdownMenuItem className="cursor-pointer">
                            Register
                          </DropdownMenuItem>
                        </Link>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
                <li className="hidden  rounded-full h-10 w-10 md:inline-flex items-center justify-center relative">
                  <Link href={"/dashboard/favorites"}>
                    <Heart size={24} className="text-gray-600" />
                    <span className="px-1 text-xs font-semibold text-white rounded-full bg-main absolute -top-1 -right-1">
                      {favorites?.length > 9 ? "9+" : favorites?.length}
                    </span>
                  </Link>
                </li>

                {/* Cart Button */}
                <li className="hidden md:block relative">
                  <Button
                    onClick={() => dispatch(setCartSidebarOpen(true))}
                    className="flex items-center gap-1 sm:gap-2 bg-main hover:bg-main-light rounded-full px-3 sm:px-6 sm:pl-4 sm:pr-2 py-2 shadow-lg text-sm sm:text-base"
                  >
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline font-medium">Cart</span>
                    <Badge className="bg-orange-500 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ml-1">
                      {carts?.length}
                    </Badge>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          {/* Mobile search */}
          {mobileSearch && (
            <div className="container pb-3 px-2 md:px-0  lg:hidden mt-3">
              <div className="relative">
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  placeholder="Search products..."
                  className="w-full pl-4 pr-12 py-[10px] h-auto rounded-full border-2 border-gray-200 focus:border-main-light focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-200"
                />
                <Button
                  onClick={handleSearch}
                  type="button"
                  size="sm"
                  className="absolute right-1 top-2/4 -translate-y-2/4 bottom-1 px-7 h-auto py-5 rounded-full bg-gradient-to-r from-main to-main-light hover:from-main hover:to-main-light shadow-md"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="hidden bg-gradient-to-r from-gray-50 to-white md:block border-b border-gray-200">
          <div className="container py-2 gap-4 flex ">
            <div className="w-[250px]  relative flex items-center  border-r border-border  gap-3">
              <Button
                onClick={() => {
                  setOpenCategory(!openCategory);
                }}
                className="flex justify-between hover:bg-main gap-3 px-4 py-3 rounded-md bg-main cursor-pointer w-full h-full items-center"
              >
                <div className="flex gap-2 items-center">
                  <Menu size={20} className="text-white" />
                  <p className="uppercase text-sm text-white font-semibold">
                    Categories
                  </p>
                </div>
                <div>
                  <ChevronDown size={16} className="text-white" />
                </div>
              </Button>
              {openCategory && (
                <div className="w-[280px] z-[4] bg-white absolute top-[calc(100%+1px)] left-0  ">
                  <div className="border border-border border-t-0 max-h-[400px]  rounded rounded-t-none ">
                    <HeaderBrowsCategory />
                  </div>
                </div>
              )}
            </div>
            <div className="flex-grow pl-2 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-main font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-main font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact-us"
                  className="text-gray-700 hover:text-main font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Link href={"/offers"}>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-medium shadow-md">
                    �� Special Offers
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
