import { Card } from "@/components/ui/card";
import Image from "next/image";
import React, { FC } from "react";

type TAuthLayout = {
  children: React.ReactNode;
};
const AuthLayout: FC<TAuthLayout> = ({ children }) => {
  return (
    <section className="py-8  items-center justify-center">
      <Card className="max-w-[800px] py-10 mx-2 md:py-0  items-center md:mx-auto mt-3 grid grid-cols-1 md:grid-cols-2 ">
        <div className="hidden md:block  ">
          <div className=" w-full mx-auto lg:order-1 pb-0 bg-main-light  rounded-l-md ">
            {/* <p className="text-4xl font-bold text-main">
              Simplify management your dashboard
            </p>
            <p className="text-main text-sm">
              Simplify your ecommarce management with our user friendly admin
              dashboard
            </p>
            <div>
              <Image
                src={"/auth.png"}
                width={400}
                height={300}
                alt="Avater"
                className=""
              />
            </div> */}
            <Image
              src={"/login.jpg"}
              width={400}
              height={500}
              alt="Login"
              className="w-full h-[470px] object-cover rounded-l-lg"
            />
          </div>
        </div>
        <div className="w-full px-10">{children}</div>
      </Card>
    </section>
  );
};

export default AuthLayout;
