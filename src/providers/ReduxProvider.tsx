"use client";

import { useAppDispatch } from "@/hooks/useRedux";
import { addBrands } from "@/redux/features/brandSlice";
import { addCategorys } from "@/redux/features/categorySlice";
import { setProducts } from "@/redux/features/productSlice";
import { store, persistor } from "@/redux/store";
import { TBrandType } from "@/types/brand.type";
import { TCategoryType } from "@/types/category.type";
import { TProduct } from "@/types/product.type";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

type Props = {
  children: React.ReactNode;
  brands: TBrandType[];
  categories: TCategoryType[];
  products: TProduct[];
};

const ReduxProvider = ({ children, brands, categories, products }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChildWrapper
          brands={brands}
          categories={categories}
          products={products}
        >
          {children}
        </ChildWrapper>
      </PersistGate>
    </Provider>
  );
};

const ChildWrapper = ({ children, brands, categories, products }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addBrands(brands));
    dispatch(addCategorys(categories));
    dispatch(setProducts(products));
  }, [dispatch, brands, categories, products]);

  return <>{children}</>;
};

export default ReduxProvider;
