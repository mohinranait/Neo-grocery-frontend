"use client";
import withCounter, { WithCounterProps } from "@/hoc/withCounter";
import { Minus, Plus } from "lucide-react";
import React, { FC } from "react";

const ProductCartCounter: FC<WithCounterProps> = ({
  decrement,
  increment,
  counter,
}) => {
  return (
    <React.Fragment>
      <div className="rounded gap-1 inline-flex items-center ">
        <span
          onClick={decrement}
          className="w-10 h-10 rounded-full flex items-center justify-center border bg-slate-200 hover:bg-main   text-gray-900 hover:text-white cursor-pointer"
        >
          <Minus className="" size={16} />
        </span>

        <span className=" w-8 text-center block">{counter}</span>

        <span
          onClick={increment}
          className="w-10 h-10 rounded-full flex items-center justify-center border bg-slate-200 hover:bg-main   text-gray-900 hover:text-white cursor-pointer"
        >
          <Plus className="" size={16} />
        </span>
      </div>
    </React.Fragment>
  );
};

export default withCounter(ProductCartCounter);
