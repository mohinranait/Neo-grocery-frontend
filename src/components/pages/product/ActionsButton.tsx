"use client";

import { Button } from "@/components/ui/button";
import ProductCartCounter from "./ProductCartCounter";
import { Heart, Share2, ShoppingCart, Shuffle } from "lucide-react";
import { TProduct } from "@/types/product.type";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { TCartItems } from "@/types/cart.type";
import { useEffect, useMemo, useState } from "react";
import { addToCart } from "@/redux/features/shoppingCartSlice";
import { updateVariant } from "@/redux/features/productSlice";
import toast from "react-hot-toast";
import { Badge } from "@/components/ui/badge";
import { currency } from "@/helpers/utils";

type Props = {
  product: TProduct;
};

const ActionsButton = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const { carts } = useAppSelector((state) => state.cart);
  const { attributes: getAttributes } = useAppSelector(
    (state) => state.attributes
  );
  const { attributeConfigs: getAttrConfigs } = useAppSelector(
    (state) => state.attributeConfigs
  );
  const { variant } = useAppSelector((state) => state.product);

  const cart = useMemo(
    () => carts?.find((cart: TCartItems) => cart?.product === product?._id),
    [carts, product]
  );

  const [quantity, setQuantity] = useState(cart?.quantity || 1);
  const [isPrice, setIsPrice] = useState({ oPrice: 0, pPrice: 0 });
  const [attributeIds, setAttributesIds] = useState<string[]>([]);

  const attributes = useMemo(() => {
    const attrIds = product?.attributes?.map((attr) => attr?.attribute) || [];
    return getAttributes?.filter((attr) => attrIds.includes(attr?._id)) || [];
  }, [product, getAttributes]);

  const attrConfigs = useMemo(() => {
    const configIds =
      product?.attributes?.flatMap((attr) => attr?.attributeConfig) || [];
    return getAttrConfigs?.filter((cfg) => configIds.includes(cfg?._id)) || [];
  }, [product, getAttrConfigs]);

  // ✅ Build a map of valid config options per attribute
  const validConfigMap = useMemo(() => {
    if (!product?.variations || !getAttrConfigs) return {};

    const result: Record<string, string[]> = {};

    attributes.forEach((attr) => {
      const currentAttrId = attr._id;

      const selectedMap = attributeIds.reduce((acc, id, i) => {
        const aid = attributes[i]?._id;
        if (aid && id) acc[aid] = id;
        return acc;
      }, {} as Record<string, string>);

      const validIds = product.variations
        .filter((variation) => {
          return Object.entries(selectedMap).every(([attrId, configId]) => {
            if (attrId === currentAttrId) return true;
            return variation.attributeConfigs.some((ac) => {
              const config = getAttrConfigs.find((cfg) => cfg._id === ac.value);
              return (
                config && config.attribute === attrId && config._id === configId
              );
            });
          });
        })
        .flatMap((v) =>
          v.attributeConfigs
            .map((ac) => ac.value)
            .filter((val) => {
              const cfg = getAttrConfigs.find((c) => c._id === val);
              return cfg?.attribute === currentAttrId;
            })
        );

      result[currentAttrId] = validIds;
    });

    return result;
  }, [attributeIds, attributes, product?.variations, getAttrConfigs]);

  const increment = () => setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const handleAddToCart = () => {
    let cartData: TCartItems = {
      user: null,
      product: product?._id,
      quantity,
      price:
        product?.price?.sellPrice && product?.price?.sellPrice > 0
          ? product?.price?.sellPrice
          : product?.price?.productPrice,
      sku: product?.skuCode,
    };

    if (
      product?.attributes &&
      product?.attributes?.length > 0 &&
      attributeIds?.length !== product?.attributes?.length
    ) {
      const prodAttributes = product?.attributes?.map(
        (item) => item?.attribute
      );
      const missingAttrs = getAttributes?.filter((attr) =>
        prodAttributes?.includes(attr?._id)
      );

      toast.custom(
        <div className="py-2 px-3 rounded-md text-sm bg-white text-black shadow-md">
          ⚠️ Please select:{" "}
          {missingAttrs?.map((a, i) => (
            <span key={i} className="font-semibold">
              {a?.name}
              {i < missingAttrs.length - 1 && ", "}
            </span>
          ))}
        </div>
      );
      return;
    }

    if (
      attributeIds?.length ===
      (product?.attributes && product?.attributes?.length)
    ) {
      const attrConfigs = getAttrConfigs?.filter((attrCon) =>
        attributeIds?.includes(attrCon?._id)
      );

      attrConfigs?.forEach((item) => {
        if (!cartData.attributes) {
          cartData.attributes = {};
        }

        const findAttr = getAttributes?.find(
          (attr) => attr?._id === item?.attribute
        );
        if (!findAttr) {
          toast.error("Something went wrong with attributes");
          return;
        }

        cartData.attributes[findAttr?.name] = item?.name;
      });
    }

    if (product?.variant === "Variable Product") {
      cartData = {
        ...cartData,
        price: variant?.offerPirce
          ? Number(variant?.offerPirce)
          : Number(variant?.productPrice) || 0,
        sku: variant?.sku || "default",
      };
    }

    if (isAuthenticated) {
      cartData.user = user?._id as string;
    }

    dispatch(addToCart(cartData));
  };

  useEffect(() => {
    if (cart?.quantity) setQuantity(cart?.quantity);
  }, [cart]);

  useEffect(() => {
    if (product?.price) {
      const { productPrice, sellPrice } = product?.price || {};
      setIsPrice({
        oPrice: sellPrice,
        pPrice: productPrice,
      });
    }
  }, [product]);

  const handleChangeAttribute = (id: string, index: number) => {
    setAttributesIds((prev) => {
      const newArr = [...prev];
      newArr[index] = id;
      return newArr;
    });
  };

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
      <div className="space-y-2">
        {isPrice?.oPrice ? (
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-gray-900">
              {currency}
              {isPrice?.oPrice?.toFixed(2)}
            </span>
            <span className="text-lg text-gray-500 line-through">
              {currency}
              {isPrice?.pPrice?.toFixed(2)}
            </span>
            <Badge className="bg-red-100 text-red-700 px-3 py-1">33% OFF</Badge>
          </div>
        ) : (
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-gray-900">
              {currency}
              {isPrice.pPrice?.toFixed(2)}
            </span>
          </div>
        )}

        <p className="text-sm text-gray-500">Price includes all taxes</p>
      </div>

      {attributes?.length > 0 && (
        <div className="space-y-2">
          {attributes.map((attr, index) => {
            const matchedConfigs = attrConfigs?.filter(
              (ac) => ac?.attribute === attr?._id
            );

            const validIds = validConfigMap[attr._id] || [];
            return (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-900 mb-[3px]">
                  {attr.name}
                </label>
                <div className="flex gap-2">
                  {matchedConfigs?.map((config, iKey) => (
                    <Button
                      disabled={
                        validIds.length > 0 && !validIds.includes(config._id)
                      }
                      key={iKey}
                      onClick={() => handleChangeAttribute(config?._id, index)}
                      className={` text-xs h-8 px-3 border bg-white hover:bg-white rounded  ${
                        attributeIds?.includes(config?._id)
                          ? "border-main  bg-emerald-100 hover:bg-emerald-100 text-main"
                          : "border-main border-gray-300 text-gray-700 "
                      }`}
                    >
                      {config.name}
                    </Button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* <p>Total: $15 × 3 = $45</p> */}
      <div className="flex flex-wrap items-center gap-3 mt-4">
        <ProductCartCounter
          increment={increment}
          decrement={decrement}
          quantity={quantity || 1}
        />
        <Button type="button" onClick={handleAddToCart}>
          <ShoppingCart />
          Add to cart
        </Button>
        <Button
          variant="outline"
          className="bg-main text-white hover:bg-main hover:text-white"
        >
          Buy Now
        </Button>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <Button variant="link">
          <Heart /> Add wishlist
        </Button>
        <Button variant="link">
          <Shuffle /> Add Compare
        </Button>
        <Button variant="link" className="ml-auto">
          <Share2 />
        </Button>
      </div>
    </>
  );
};

export default ActionsButton;
