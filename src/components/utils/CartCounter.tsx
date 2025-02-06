"use clinet";
import React from "react";
import { Minus, Plus } from "lucide-react";
import { TCartItems } from "@/types/cart.type";
import { useAppDispatch } from "@/hooks/useRedux";
import { addToCart } from "@/redux/features/shoppingCartSlice";

type Props = {
  cart: TCartItems;
};
const CartCounter = ({ cart }: Props) => {
  const dispatch = useAppDispatch();

  const increment = () => {
    if (cart?.quantity < 20) {
      dispatch(addToCart({ ...cart, quantity: cart?.quantity + 1 }));
    }
  };

  const decrement = () => {
    if (cart?.quantity > 1) {
      dispatch(addToCart({ ...cart, quantity: cart?.quantity - 1 }));
    }
  };

  return (
    <div className="inline-flex gap-1 items-center">
      <button
        onClick={decrement}
        className="w-7 h-7 rounded-full border border-border flex items-center justify-center cursor-pointer"
      >
        <Minus size={15} />
      </button>
      <span className="px-[6px] py-[3px] text-sm">{cart?.quantity}</span>
      <button
        onClick={increment}
        className="w-7 h-7 rounded-full border border-border flex items-center justify-center cursor-pointer"
      >
        <Plus size={15} />
      </button>
    </div>
  );
};

export default CartCounter;
