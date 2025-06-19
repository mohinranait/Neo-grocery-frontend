"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { TProduct } from "@/types/product.type";
import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { TCartItems } from "@/types/cart.type";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { addToCart, setAllCarts } from "@/redux/features/shoppingCartSlice";
import { Badge } from "../ui/badge";
import ProductViewModal from "../modals/ProductViewModal";
import { Card, CardContent } from "../ui/card";

type Props = {
  product: TProduct;
};
const ProductCard = ({ product }: Props) => {
  console.log({ product });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { name, slug, featureImage, price } = product || {};
  // Redux State
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const { carts } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const findCart = carts?.find((cart) => cart?.product === product?._id);
  const [images, setImages] = useState<string[]>([]);
  const [featureImg, setFeatureImg] = useState(featureImage?.image);

  const handleAddToCart = () => {
    const cartData: TCartItems = {
      user: null,
      product: product?._id,
      quantity: 1,
      price: product?.price?.sellPrice
        ? product?.price?.sellPrice
        : product?.price?.productPrice,
      sku: "default",
    };
    if (isAuthenticated) {
      cartData.user = user?._id as string;
    }

    dispatch(addToCart(cartData));
  };

  const increment = (qty: number) => {
    if (qty < 20) {
      const updateCarts = carts?.map((cart) =>
        cart?.product === product?._id
          ? { ...cart, quantity: cart?.quantity + 1 }
          : cart
      );
      dispatch(setAllCarts(updateCarts));
    }
  };

  const decrement = (qty: number) => {
    if (qty > 1) {
      const updateCarts = carts?.map((cart) =>
        cart?.product === product?._id
          ? { ...cart, quantity: cart?.quantity - 1 }
          : cart
      );
      dispatch(setAllCarts(updateCarts));
    }
  };

  useEffect(() => {
    let pImgs: string[] = [];
    const { featureImage, imageGallary } = product || {};
    if (product?.variant === "Variable Product") {
      const imgs = product?.variations?.map((item) => item?.image);
      pImgs = [featureImage?.image, ...imgs];
    } else {
      const gallarys = (imageGallary as string[]) || [];
      pImgs = [featureImage?.image, ...gallarys];
    }
    setImages(pImgs || []);
  }, [product]);

  return (
    <>
      <Card className="group  hover:shadow-lg transition-all duration-300 border-0 shadow-md">
        <CardContent className="flex flex-col h-full p-3">
          <div className="group/img relative mb-4">
            <Image
              onClick={() => setIsOpen(!isOpen)}
              width={400}
              height={400}
              src={featureImg || featureImage?.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
              New
            </Badge>

            <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
              -45%
            </Badge>
            <div className="absolute group-hover:scale-100 group-hover:left-1 transition-all scale-0 w-[50px] z-10 bottom-1 left-[18px] ">
              <div className="flex flex-col gap-1  p-1 h-[130px] w-[44px]">
                {images?.slice(0, 3)?.map((img, imgIndex) => (
                  <button
                    onClick={() => setFeatureImg(img)}
                    key={imgIndex}
                    className=" border rounded size-10 bg-white hover:bg-white"
                  >
                    <Image src={img} width={40} height={40} alt="images" />
                  </button>
                ))}
              </div>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="absolute bottom-2 right-2 bg-white/80 hover:bg-white"
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-2 flex-grow">
            <h3 className="font-semibold text-sm line-clamp-2">
              <Link
                href={`/product/${slug}`}
                className=" hover:text-main text-sm text-gray-700 transition-all  inline-block leading-[17px] font-medium"
              >
                {name}
              </Link>
            </h3>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(5)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-xs text-gray-500 ml-1">
                ({product.rating})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-main">
                ${price?.sellPrice > 0 ? price?.sellPrice : price?.productPrice}
              </span>
              {price?.sellPrice > 0 && (
                <span className="text-sm text-gray-500 line-through">
                  ${price?.productPrice}
                </span>
              )}
            </div>
          </div>
          <div>
            <div className="flex relative items-center justify-between pt-2">
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Order Now
              </Button>
              {findCart?.product ? (
                <div className=" h-8 flex items-center  ">
                  <div className="flex gap-1 items-center">
                    <button
                      onClick={() => decrement(findCart?.quantity || 1)}
                      className="w-7 h-7 hover:bg-main hover:text-white rounded-full border border-border flex items-center justify-center cursor-pointer"
                    >
                      <Minus size={15} />
                    </button>
                    <span className="w-[20px] text-center py-[3px] text-sm">
                      {findCart?.quantity}
                    </span>
                    <button
                      onClick={() => increment(findCart?.quantity || 1)}
                      className="w-7 h-7 hover:bg-main hover:text-white rounded-full border border-border flex items-center justify-center cursor-pointer"
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                </div>
              ) : (
                <Button
                  onClick={handleAddToCart}
                  type="button"
                  className=" h-[32px] px-[8px] "
                >
                  <ShoppingCart />
                  {/* <Plus /> */}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <ProductViewModal setOpen={setIsOpen} open={isOpen} />
    </>
  );
};

export default ProductCard;
