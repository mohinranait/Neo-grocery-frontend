"use client";
import { Button } from "@/components/ui/button";
import ProductCartCounter from "./ProductCartCounter";
import { Heart, Share2, Shuffle } from "lucide-react";
import { TProduct } from "@/types/product.type";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { TCartItems } from "@/types/cart.type";
import { useEffect, useMemo, useState } from "react";
import { addToCart } from "@/redux/features/shoppingCartSlice";
import { updateVariant } from "@/redux/features/productSlice";

type Props = {
  product: TProduct;
};
const ActionsButton = ({ product }: Props) => {
  // Redux State
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const { carts } = useAppSelector((state) => state.cart);
  const { attributes: getAttributes } = useAppSelector(
    (state) => state.attributes
  );
  const { attributeConfigs: getAttrConfigs } = useAppSelector(
    (state) => state.attributeConfigs
  );
  const dispatch = useAppDispatch();

  // const cart = carts?.find(
  //   (cart: TCartItems) => cart?.product === product?._id
  // );

  const cart = useMemo(
    () => carts?.find((cart: TCartItems) => cart?.product === product?._id),
    [carts, product]
  );

  // Local state
  const [quantity, setQuantity] = useState(cart?.quantity || 1);
  const [isPrice, setIsPrice] = useState({ oPrice: 0, pPrice: 0 });
  const [attributeIds, setAttributesIds] = useState<string[]>([]);

  // Derived states using useMemo for performance optimization
  const attributes = useMemo(() => {
    const attrIds = product?.attributes?.map((attr) => attr?.attribute) || [];
    return getAttributes?.filter((attr) => attrIds.includes(attr?._id)) || [];
  }, [product, getAttributes]);

  const attrConfigs = useMemo(() => {
    const configsIds =
      product?.attributes?.flatMap((attr) => attr?.attributeConfig) || [];
    return (
      getAttrConfigs?.filter((attr) => configsIds.includes(attr?._id)) || []
    );
  }, [product, getAttrConfigs]);

  // Update cart quantity
  const increment = () => setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  // Add product in your shopping cart
  const handleAddToCart = () => {
    const cartData: TCartItems = {
      user: null,
      product: product?._id,
      quantity: quantity,
    };
    if (isAuthenticated) {
      cartData.user = user?._id as string;
    }
    dispatch(addToCart(cartData));
  };

  // Update quantity when cart updates
  useEffect(() => {
    if (cart?.quantity) setQuantity(cart?.quantity);
  }, [cart]);

  // Update Product price state
  useEffect(() => {
    if (product?.price) {
      const { productPrice, sellPrice } = product?.price || {};
      setIsPrice({
        oPrice: sellPrice,
        pPrice: productPrice,
      });
    }
  }, [product]);

  // handle change attribute
  const handleChangeAttribute = (id: string, index: number) => {
    setAttributesIds((prev) => {
      const newArr = [...prev];
      newArr[index] = id;
      return newArr;
    });
  };

  // Find variant
  useEffect(() => {
    if (product?.variations && attributeIds?.length > 0) {
      const variantObject = product?.variations?.find((item) =>
        attributeIds.every((id) =>
          item.attributeConfigs.some((attr) => attr.value === id)
        )
      );
      if (variantObject) {
        dispatch(updateVariant(variantObject));
        setIsPrice({
          pPrice: variantObject?.productPrice,
          oPrice: variantObject?.offerPirce,
        });
      }
    }
  }, [attributeIds, product, dispatch]);

  return (
    <>
      <div className="flex items-center gap-1">
        {isPrice?.oPrice ? (
          <>
            <span className="text-2xl font-semibold text-gray-900">
              ${isPrice?.oPrice}–{" "}
            </span>
            <del className="text-xl font-semibold text-gray-400">
              ${isPrice?.pPrice}
            </del>
          </>
        ) : (
          <>
            <span className="text-2xl font-semibold text-gray-900">
              ${isPrice.pPrice}
            </span>
          </>
        )}
      </div>

      {attributes?.length > 0 && (
        <ul>
          {attributes?.map((attr, index) => {
            const matchedConfigs = attrConfigs?.filter(
              (attrCon) => attrCon?.attribute === attr?._id
            );

            return (
              <li key={index} className="flex justify-start items-center gap-2">
                <span className="font-medium min-w-[60px] text-sm">
                  {attr?.name}:
                </span>
                <select
                  onChange={(e) => handleChangeAttribute(e.target.value, index)}
                  className=" p-1 mt-1 border text-sm min-w-[100px] border-gray-300 rounded-md"
                >
                  <option>Select </option>
                  {matchedConfigs?.map((config, index) => (
                    <option key={index} value={config?._id}>
                      {config?.name}
                    </option>
                  ))}
                </select>
              </li>
            );
          })}
        </ul>
      )}

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
