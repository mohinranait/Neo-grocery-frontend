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
        <button
          disabled={counter === 1 ? true : false}
          onClick={decrement}
          className={`${
            counter === 1
              ? " text-slate-400 hover:bg-slate-200 hover:text-slate-400"
              : ""
          } w-10 h-10 rounded-full flex items-center justify-center border bg-slate-200 hover:bg-main   text-gray-900 hover:text-white cursor-pointer`}
        >
          <Minus className="" size={16} />
        </button>

        <span className=" w-8 text-center block">{counter}</span>

        <button
          disabled={counter === 20 ? true : false}
          onClick={increment}
          className={` ${
            counter === 20
              ? " text-slate-400 hover:bg-slate-200 hover:text-slate-400"
              : ""
          } w-10 h-10 rounded-full flex items-center justify-center border bg-slate-200 hover:bg-main   text-gray-900 hover:text-white cursor-pointer`}
        >
          <Plus className="" size={16} />
        </button>
      </div>
    </React.Fragment>
  );
};

export default withCounter(ProductCartCounter);
