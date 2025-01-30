"use clinet";
import React, { FC } from "react";
import { Minus, Plus } from "lucide-react";
import withCounter, { WithCounterProps } from "@/hoc/withCounter";

const CartCounter: FC<WithCounterProps> = ({
  increment,
  decrement,
  counter,
}) => {
  return (
    <div className="inline-flex gap-1 items-center">
      <span
        onClick={decrement}
        className="w-7 h-7 rounded-full border border-border flex items-center justify-center cursor-pointer"
      >
        <Minus size={15} />
      </span>
      <span className="px-[6px] py-[3px] text-sm">{counter}</span>
      <span
        onClick={increment}
        className="w-7 h-7 rounded-full border border-border flex items-center justify-center cursor-pointer"
      >
        <Plus size={15} />
      </span>
    </div>
  );
};

export default withCounter(CartCounter);
