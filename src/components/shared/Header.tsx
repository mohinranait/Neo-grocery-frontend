"use client";
import {
  Heart,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import MobileSearchSeet from "../sheets/MobileSearchSeet";
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

const Header = () => {
  // Redux state
  const { carts } = useAppSelector((state) => state.cart);
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // Local state
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const pathName = usePathname();
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    if (pathName === "/") {
      setOpenCategory(true);
    } else {
      setOpenCategory(false);
    }
  }, [pathName]);
  return (
    <header>
      <div className="border-b bg-white border-border">
        <div className="px-2 md:px-0 container justify-between h-[60px]  md:h-[80px] flex items-center ">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo />
          </div>

          {/* Middle column */}
          <div className="hidden flex-grow md:flex justify-center  ">
            <div className="border-slate-200 border min-w-[450px] lg:min-w-[600px] rounded-md flex items-center p-1 ">
              <div>
                <div className="px-2 text-nowrap text-sm text-text border-r border-slate-300 ">
                  Select Categorys
                </div>
              </div>

              <input
                type="search"
                placeholder="Search..."
                className="py-1 w-full text-sm bg-transparent focus-visible:outline-none px-2"
              />

              <button className="bg-primary h-full py-[10px] inline-flex items-center justify-center px-[10px] rounded-md">
                <Search className="text-white" size={18} />
              </button>
            </div>
          </div>
          <div>
            <ul className="flex items-center gap-2">
              <li className="hidden xl:block rounded-full ">
                <Link
                  href={`tel:01728068200`}
                  className="flex items-center group"
                >
                  <div>
                    <Phone size={30} className="group-hover:text-main" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-800 group-hover:text-main">
                      Contact us 24/7
                    </p>
                    <p className="font-semibold text-sm text-gray-900 group-hover:text-main">
                      (+88) 01728068200
                    </p>
                  </div>
                </Link>
              </li>
              <MobileSearchSeet />

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <li className=" hidden  rounded-full h-10 w-10 md:inline-flex items-center justify-center relative">
                    <div className="w-10 cursor-pointer h-10 relative flex items-center justify-center rounded-full ">
                      <UserRound size={24} />
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
                <div className="w-10 cursor-pointer h-10 relative flex items-center justify-center rounded-full ">
                  <Heart size={24} />
                  <span className="px-1 text-xs font-semibold text-white rounded-full bg-main absolute -top-1 -right-1">
                    9+
                  </span>
                </div>
              </li>
              <li className="hidden  rounded-full h-10 w-10 md:inline-flex items-center justify-center relative">
                <div
                  onClick={() => dispatch(setCartSidebarOpen(true))}
                  className="w-10  cursor-pointer h-10 relative flex items-center justify-center rounded-full "
                >
                  <ShoppingCart size={24} />
                  <span className="px-1 text-xs font-semibold text-white rounded-full bg-main absolute -top-1 -right-1">
                    {carts?.length || 0}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden bg-white md:block border-b border-border">
        <div className="container flex ">
          <div className="w-[280px] bg-main relative flex items-center  border-r border-border  gap-3">
            <div
              onClick={() => {
                if (pathName === "/") {
                  setOpenCategory(true);
                } else {
                  setOpenCategory(!openCategory);
                }
              }}
              className="flex gap-3 px-4 cursor-pointer w-full h-full items-center"
            >
              <Menu size={20} className="text-white" />
              <p className="uppercase text-sm text-white font-semibold">
                Categories
              </p>
            </div>
            {openCategory && (
              <div className="w-[280px] z-[4] bg-white absolute top-[calc(100%+1px)] left-0  ">
                <div className="border border-border border-t-0 max-h-[400px]  rounded rounded-t-none ">
                  <HeaderBrowsCategory />
                </div>
              </div>
            )}
          </div>
          <div className="flex-grow pl-2 flex justify-between items-center">
            <ul className="flex gap-5 items-center">
              <li>
                <Link
                  href="/"
                  className="py-[10px] hover:text-main text-black transition-all text-sm inline-flex"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="py-[10px] hover:text-main text-black transition-all text-sm inline-flex"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-[10px] hover:text-main text-black transition-all text-sm inline-flex"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div>
              <Link href={"/"} className="text-sm text-main  font-semibold ">
                Offer Sale
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
