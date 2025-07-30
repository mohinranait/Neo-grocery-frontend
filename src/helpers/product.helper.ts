import { TProduct } from "@/types/product.type";

/**
 * Calculate product price
 * @prams {product}
*/
export const calculateProductPrice = (product:TProduct)  => {
    const { variations,price, variant} = product || {}
   if (variant === "Variable Product") {
      const allPrice = variations?.map((vari) =>
        vari?.offerPirce ? Number(vari?.offerPirce) : Number(vari?.productPrice)
      );
      const max = Math.max(...allPrice) || 0;
      const min = Math.min(...allPrice) || 0;
      return `${Number(min) || 0}-${max || 0}`;
    } else{
         const hasDiscount = price?.discountValue && price?.discountType;

      const finalPrice =
        hasDiscount && price?.discountType === "fixed"
          ? price?.productPrice - price?.discountValue
          : hasDiscount && price?.discountType === "percent"
          ? price?.productPrice - (price?.productPrice * price?.discountValue) / 100
          : price?.productPrice;

      return finalPrice?.toFixed(2);
    }
}
export function calculateDiscount(product: TProduct) {
  const { price } = product;
  let discountAmount = 0;
  let percentage = 0;

  if (price.discountType === "percent") {
    discountAmount = (price?.productPrice * price?.discountValue) / 100;
    percentage = price?.discountValue;
  } else if (price?.discountType === "fixed") {
    discountAmount = price.discountValue;
    percentage = (discountAmount / price?.productPrice) * 100;
  }

  const finalPrice = price?.productPrice - discountAmount;

  return {
    discountAmount,
    finalPrice,
    percentage: Number(percentage.toFixed(2))  
  };
}


