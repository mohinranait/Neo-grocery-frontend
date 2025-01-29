"use client";
import { Heart, Menu, Phone, Search, UserRound } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartSheets from "../sheets/CartSheets";
import Logo from "./Logo";
import { categorysLists } from "@/constans/categorysLists";
import { usePathname } from "next/navigation";

const Header = () => {
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/") {
      setOpenCategory(true);
    } else {
      setOpenCategory(false);
    }
  }, [pathName]);
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
          <div className="w-[280px] relative flex items-center  border-r border-border  gap-3">
            <div
              onClick={() => {
                if (pathName === "/") {
                  setOpenCategory(true);
                } else {
                  setOpenCategory(!openCategory);
                }
              }}
              className="flex gap-3 cursor-pointer w-full h-full items-center"
            >
              <Menu size={20} />
              <p className="uppercase text-sm text-gray-700 font-semibold">
                Categories
              </p>
            </div>
            {openCategory && (
              <div className="w-[280px] bg-white absolute top-[calc(100%+1px)] left-0  ">
                <div className="border border-border border-t-0  rounded rounded-t-none ">
                  <ul className="relative">
                    {categorysLists?.map((category, index) => (
                      <li key={index} className="group">
                        <a
                          href="#"
                          className="inline-flex group text-primary hover:text-main w-full px-4 py-2 justify-between items-center"
                        >
                          <span className="inline-flex gap-1 items-center">
                            {/* <Cookie size={14} /> */}
                            {category?.icon}
                            <span className="text-sm">{category?.name}</span>
                          </span>
                          {/* <span className="text-gray-500 group-hover:text-main text-sm">
                                {category?.totalItem}
                              </span> */}{" "}
                          Arr
                        </a>
                        {index == 1 && (
                          <ul className="w-[250px] border border-border border-l-0 border-t-0 group-hover:block hidden absolute top-0 z-10 bg-white left-[279px]">
                            {categorysLists?.map((category, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="inline-flex group text-primary hover:text-main w-full px-4 py-2 justify-between items-center"
                                >
                                  <span className="inline-flex gap-1 items-center">
                                    {/* <Cookie size={14} /> */}
                                    {category?.icon}
                                    <span className="text-sm">
                                      {category?.name}
                                    </span>
                                  </span>
                                  {/* <span className="text-gray-500 group-hover:text-main text-sm">
                                {category?.totalItem}
                              </span> */}{" "}
                                  Arr
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
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
