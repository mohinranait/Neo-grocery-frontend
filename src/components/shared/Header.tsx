import { Heart, Menu, Phone, Search, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import CartSheets from "../sheets/CartSheets";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="border-b border-border">
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
              <li className=" md:hidden rounded-full h-10 w-10 inline-flex items-center justify-center relative">
                <div className="w-10 cursor-pointer h-10 relative flex items-center justify-center rounded-full ">
                  <Search size={24} />
                </div>
              </li>
              <li className=" hidden  rounded-full h-10 w-10 md:inline-flex items-center justify-center relative">
                <div className="w-10 cursor-pointer h-10 relative flex items-center justify-center rounded-full ">
                  <UserRound size={24} />
                </div>
              </li>
              <li className="hidden  rounded-full h-10 w-10 md:inline-flex items-center justify-center relative">
                <div className="w-10 cursor-pointer h-10 relative flex items-center justify-center rounded-full ">
                  <Heart size={24} />
                  <span className="px-1 text-xs font-semibold text-white rounded-full bg-main absolute -top-1 -right-1">
                    9+
                  </span>
                </div>
              </li>
              {/* Shopping Cart Sheet */}
              <div className="hidden md:block">
                <CartSheets />
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden md:block border-b border-border">
        <div className="container flex ">
          <div className="w-[280px]  border-r border-border flex items-center gap-3">
            <Menu size={20} />
            <p className="uppercase text-sm text-gray-700 font-semibold">
              Categories
            </p>
          </div>
          <div className="flex-grow pl-2 flex justify-between items-center">
            <ul className="flex gap-5 items-center">
              <li>
                <a
                  href="#"
                  className="py-[10px] hover:text-main text-black transition-all text-sm inline-flex"
                >
                  Home
                </a>
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
