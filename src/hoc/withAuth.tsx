"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/useRedux";
import { ShoppingCart } from "lucide-react";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const AuthenticatedComponent = (props: P) => {
    const { isLoading, user } = useAppSelector((state) => state.auth);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      if (!isLoading && !user) {
        router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
      } else {
      }
    }, [isLoading, user, pathname, router]);

    if (isLoading || !user) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="text-center">
              {/* Animated Shopping Cart */}
              <div className="relative mb-8">
                <div className="animate-bounce">
                  <ShoppingCart className="w-16 h-16 text-blue-600 mx-auto" />
                </div>
                {/* Floating Items */}
                <div className="absolute -top-2 -right-2 animate-pulse">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <div className="absolute -top-4 right-4 animate-pulse delay-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="absolute -bottom-2 -left-2 animate-pulse delay-500">
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                </div>
              </div>

              {/* Loading Text */}
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Loading Store
              </h2>
              <p className="text-gray-600 mb-6">
                Preparing your shopping experience...
              </p>

              {/* Progress Bar */}
              <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              </div>

              {/* Loading Dots */}
              <div className="flex justify-center space-x-2 mt-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
