"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const CardCounter = () => {
  const [counter, setCounter] = useState<number>(1);
  const handleCounter = (action: "decrement" | "increment") => {
    if (action === "decrement") {
      if (counter === 1) return;
      setCounter((prev) => prev - 1);
    } else {
      if (counter === 20) return;
      setCounter((prev) => prev + 1);
    }
  };

  return (
    <React.Fragment>
      <div className="rounded gap-1 inline-flex items-center ">
        <span
          onClick={() => handleCounter("decrement")}
          className="w-10 h-10 rounded-full flex items-center justify-center border bg-slate-200 hover:bg-main   text-gray-900 hover:text-white cursor-pointer"
        >
          <Minus className="" size={16} />
        </span>

        <span className=" w-8 text-center block">{counter}</span>

        <span
          onClick={() => handleCounter("increment")}
          className="w-10 h-10 rounded-full flex items-center justify-center border bg-slate-200 hover:bg-main   text-gray-900 hover:text-white cursor-pointer"
        >
          <Plus className="" size={16} />
        </span>
      </div>
    </React.Fragment>
  );
};

export default CardCounter;
