"use client";
import { Button } from "@/components/ui/button";
import ProductCartCounter from "./ProductCartCounter";
import { Heart, Share2, Shuffle } from "lucide-react";
import { TProduct } from "@/types/product.type";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { TCartItems } from "@/types/cart.type";
import { useEffect, useState } from "react";
import { addToCart } from "@/redux/features/shoppingCartSlice";

type Props = {
  product: TProduct;
};
const ActionsButton = ({ product }: Props) => {
  // Redux State
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const { carts } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const cart = carts?.find(
    (cart: TCartItems) => cart?.product === product?._id
  );

  // Local state
  const [quantity, setQuantity] = useState(cart?.quantity || 1);
  const { price } = product || {};
  const { productPrice, sellPrice } = price || {};

  const increment = () => {
    if (quantity < 20) setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  // Add product in your shopping cart
  const handleAddToCart = () => {
    const cartData: TCartItems = {
      user: null,
      product: product?._id,
      price: 10,
      quantity: quantity,
    };
    if (isAuthenticated) {
      cartData.user = user?._id as string;
    }

    dispatch(addToCart(cartData));
  };

  useEffect(() => {
    if (cart?.quantity) {
      setQuantity(cart?.quantity);
    }
  }, [cart?.quantity]);

  return (
    <>
      <div className="flex items-center gap-1">
        {sellPrice ? (
          <>
            <span className="text-2xl font-semibold text-gray-900">
              ${sellPrice}–{" "}
            </span>
            <del className="text-xl font-semibold text-gray-400">
              ${productPrice}
            </del>
          </>
        ) : (
          <>
            <span className="text-2xl font-semibold text-gray-900">
              ${productPrice}
            </span>
          </>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <ProductCartCounter
          increment={increment}
          decrement={decrement}
          quantity={quantity || 1}
        />
        <Button type="button" onClick={handleAddToCart}>
          Add to cart
        </Button>
        <Button
          variant={"outline"}
          className="bg-main text-white hover:bg-main hover:text-white te"
        >
          Buy Now
        </Button>
      </div>
      <div className="flex items-center xl:gap-3">
        <Button variant={"link"}>
          <Heart /> Add wishlist
        </Button>
        <Button variant={"link"}>
          <Shuffle /> Add Compare
        </Button>
        <Button variant={"link"} className="ml-auto">
          <Share2 />
        </Button>
      </div>
    </>
  );
};

export default ActionsButton;
