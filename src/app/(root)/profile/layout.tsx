"use client";
import {
  Key,
  LogOut,
  LucideLayoutDashboard,
  User2,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  return (
    <div>
      <div className=" container grid grid-cols-1 lg:grid-cols-[300px_auto] py-10">
        <div className="p-4 mb-4 lg:mb-0 bg-white rounded-md">
          <div className="flex pb-4 gap-3">
            <div>
              <div className="w-10">
                <Image
                  src={"/auth.png"}
                  width={40}
                  height={40}
                  alt="image"
                  className="w-[40px] ring-1 ring-offset-1 ring-main h-[40px] rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-800 font-semibold leading-[18px]">
                Mohin Rana
              </p>
              <p className="text-gray-400 text-sm leading-[16px]">
                mohin@gmail.com
              </p>
            </div>
          </div>
          <ul>
            <li>
              <Link
                href={"/profile"}
                className={` ${
                  path === "/profile" && "bg-gray-100 text-gray-700"
                } inline-flex px-3 gap-2 text-gray-500 hover:text-gray-700 items-center hover:bg-gray-100 rounded w-full py-2`}
              >
                <LucideLayoutDashboard size={18} />
                Dashbaord
              </Link>
            </li>
            <li>
              <Link
                href={"/profile/orders"}
                className={` ${
                  path === "/profile/orders" && "bg-gray-100 text-gray-700"
                } inline-flex px-3 gap-2 text-gray-500 hover:text-gray-700 items-center hover:bg-gray-100 rounded w-full py-2`}
              >
                <WalletCards size={18} />
                My Orders
              </Link>
            </li>
            <li>
              <Link
                href={"/profile/account"}
                className={` ${
                  path === "/profile/account" && "bg-gray-100 text-gray-700"
                } inline-flex px-3 gap-2 text-gray-500 hover:text-gray-700 items-center hover:bg-gray-100 rounded w-full py-2`}
              >
                <User2 size={18} />
                Profile
              </Link>
            </li>
            <li>
              <Link
                href={"/profile/change-password"}
                className={` ${
                  path === "/profile/change-password" &&
                  "bg-gray-100 text-gray-700"
                } inline-flex px-3 gap-2 text-gray-500 hover:text-gray-700 items-center hover:bg-gray-100 rounded w-full py-2`}
              >
                <Key size={18} />
                Change Password
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="inline-flex px-3 gap-2 text-gray-500 hover:text-gray-700 items-center hover:bg-gray-100 rounded w-full py-2"
              >
                <LogOut size={18} />
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
