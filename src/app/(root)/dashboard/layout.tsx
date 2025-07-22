"use client";
import withAuth from "@/hoc/withAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useAppSelector } from "@/hooks/useRedux";
import {
  Heart,
  Key,
  LogOut,
  LucideLayoutDashboard,
  MapPin,
  User2,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div>
      <div className=" container grid grid-cols-1 lg:grid-cols-[300px_auto] py-10">
        <div className="p-4 mb-4 lg:mb-0 bg-white rounded-md">
          <div className="flex pb-4 gap-3">
            <div>
              <div className="w-10">
                <Avatar className="w-10 h-10 ring-1 ring-main ring-offset-1">
                  <AvatarImage src={user?.profile} alt="Profile" />
                  <AvatarFallback className="text-lg uppercase">
                    {user?.name?.firstName[0]}
                    {user?.name?.lastName[0]}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div>
              <p className="text-gray-800 font-semibold leading-[18px]">
                {user?.name?.firstName} {user?.name?.lastName}
              </p>
              <p className="text-gray-400 text-sm leading-[16px]">
                {user?.email}
              </p>
            </div>
          </div>
          <ul>
            <li>
              <Link
                href={"/dashboard"}
                className={` ${
                  path === "/dashboard" && "bg-gray-100 text-gray-700"
                } inline-flex px-3 gap-2 text-gray-500 hover:text-gray-700 items-center hover:bg-gray-100 rounded w-full py-2`}
              >
                <LucideLayoutDashboard size={18} />
                Dashbaord
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/orders"}
                className={` ${
                  path === "/dashboard/orders" && "bg-gray-100 text-gray-700"
                } inline-flex px-3 gap-2 text-gray-500 hover:text-gray-700 items-center hover:bg-gray-100 rounded w-full py-2`}
              >
                <WalletCards size={18} />
                My Orders
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/profile"}
                className={` ${
                  path === "/dashboard/profile" && "bg-gray-100 text-gray-700"
                } inline-flex px-3 gap-2 text-gray-500 hover:text-gray-700 items-center hover:bg-gray-100 rounded w-full py-2`}
              >
                <User2 size={18} />
                Profile
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/address"}
                className={` ${
                  path === "/dashboard/address" && "bg-gray-100 text-gray-700"
                } inline-flex px-3 gap-2 text-gray-500 hover:text-gray-700 items-center hover:bg-gray-100 rounded w-full py-2`}
              >
                <MapPin size={18} />
                Address
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/favorites"}
                className={` ${
                  path === "/dashboard/favorites" && "bg-gray-100 text-gray-700"
                } inline-flex px-3 gap-2 text-gray-500 hover:text-gray-700 items-center hover:bg-gray-100 rounded w-full py-2`}
              >
                <Heart size={18} />
                Favorites Products
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/change-password"}
                className={` ${
                  path === "/dashboard/change-password" &&
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

export default withAuth(ProfileLayout);
