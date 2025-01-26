import Image from "next/image";
import React, { FC } from "react";

type TAuthLayout = {
  children: React.ReactNode;
};
const AuthLayout: FC<TAuthLayout> = ({ children }) => {
  return (
    <section>
      <div className="max-w-[900px] mx-auto mt-3 grid grid-cols-1 lg:grid-cols-2 ">
        <div className=" order-2 ">
          <div className=" max-w-[350px] lg:max-w-max mx-auto lg:order-1 p-10 pb-0 bg-main  rounded ">
            <p className="text-4xl font-bold text-white">
              Simplify management your dashboard
            </p>
            <p className="text-gray-100 text-sm">
              Simplify your ecommarce management with our user friendly admin
              dashboard
            </p>
            <div>
              <Image src={"/auth.png"} width={400} height={300} alt="Avater" />
            </div>
          </div>
        </div>
        <div className=" order-1 lg:order-2 p-10">{children}</div>
      </div>
    </section>
  );
};

export default AuthLayout;
