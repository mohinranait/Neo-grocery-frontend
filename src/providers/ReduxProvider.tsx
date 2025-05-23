"use client";

import { getAllAttributeConfigs } from "@/actions/attributeConfigApi";
import { useAppDispatch } from "@/hooks/useRedux";
import { addAttributeConfig } from "@/redux/features/attributeConfigSlice";
import { addAttribute } from "@/redux/features/attributeSlice";
import { addBrands } from "@/redux/features/brandSlice";
import { addCategorys } from "@/redux/features/categorySlice";
import { setProducts } from "@/redux/features/productSlice";
import { store, persistor } from "@/redux/store";
import { TAttributeType } from "@/types/attribute.type";
import { TBrandType } from "@/types/brand.type";
import { TCategoryType } from "@/types/category.type";
import { TProduct } from "@/types/product.type";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

type Props = {
  children: React.ReactNode;
  brands: TBrandType[];
  categories: TCategoryType[];
  products: TProduct[];
  attributes: TAttributeType[];
};

const ReduxProvider = ({
  children,
  brands,
  categories,
  products,
  attributes,
}: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChildWrapper
          brands={brands}
          categories={categories}
          products={products}
          attributes={attributes}
        >
          {children}
        </ChildWrapper>
      </PersistGate>
    </Provider>
  );
};

const ChildWrapper = ({
  children,
  brands,
  categories,
  products,
  attributes,
}: Props) => {
  const searchParams = useSearchParams();
  const catParams = searchParams.get("cat");
  const rangeParams = searchParams.get("priceRange");
  const shippingParams = searchParams.get("shipping");
  const brandParams = searchParams.get("brandIds");

  const dispatch = useAppDispatch();

  // Get all attribute configs
  const getAttributeConfig = async () => {
    try {
      const attributeConfig = await getAllAttributeConfigs();
      if (attributeConfig?.success) {
        dispatch(addAttributeConfig(attributeConfig?.payload));
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const prices = rangeParams?.split(",");
    const filters = {
      categoryIds: catParams?.split(",") || [],
      brandIds: brandParams?.split(",") || [],
      priceRange:
        prices && ([Number(prices[0]), Number(prices[1])] as [number, number]),
      shipping: shippingParams as "yes" | "no",
    };
    dispatch(addBrands(brands));
    dispatch(addCategorys(categories));
    dispatch(setProducts({ products, filters }));
    dispatch(addAttribute(attributes));
    getAttributeConfig();
  }, [dispatch, brands, categories, products, attributes]);

  return <>{children}</>;
};

export default ReduxProvider;
