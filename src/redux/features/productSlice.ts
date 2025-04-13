import { TProduct, TVariation } from '@/types/product.type'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TFilter = {
  categoryIds?:string[],
  brandIds?:string[],
  priceRange?:[number, number],
  ratings?:string[],
  shipping?:'yes'|'no',
  sortBy?:string,
  status?:string,
}

type TInitialStateType = {
    product: TProduct,
    products: TProduct[],
    filterProducts: TProduct[],
    selectedProduct: TProduct | null,
    variant: TVariation | null;
}

const initialState:TInitialStateType  = {
  product: {} as TProduct,
  products: [],
  filterProducts:[],
  selectedProduct: null,
  variant: null,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

    setProduct:(state, action: PayloadAction<TProduct>) => {
      // Set Single product 
        state.product = action.payload;
    },
    setProducts: (state, action: PayloadAction<TProduct[]>) => {
      // Set all products
        state.products = action?.payload
        state.filterProducts =action?.payload
    },
    updateSingleProduct : (state, action: PayloadAction<TProduct>) => {
      // Update single product
        const product = action?.payload
        state.products = state.products.map((d) => d._id === product._id ? product : d)
    },
    updateProducts: (state, action: PayloadAction<TProduct>) => {
        state.products = [...state.products, action?.payload]
    },
    setSelectedProduct: (state, action: { payload: TProduct | null }) => {
      // Update selected product state
      state.selectedProduct = action?.payload;
    },
    updateVariant: (state, action: PayloadAction<TVariation>) => {
      state.variant = action?.payload
    },
    setFilterProducts: (state, action: PayloadAction<TFilter>) => {
      const { categoryIds, brandIds, priceRange,  shipping,  sortBy } = action?.payload;

      
      const filteredProducts = state.products.filter((product) => {
        let isValid = true;
        if (categoryIds && categoryIds.length > 0) {
          isValid = isValid && categoryIds.some(catId => product.category?.includes(catId) );
        }

        if (brandIds && brandIds.length > 0) {
          isValid = isValid && brandIds.some(brandId => product.brand?.includes(brandId) );
        }

        if (priceRange && priceRange.length === 2) {
          if(product.price?.sellPrice && product.price?.sellPrice > 0){
            isValid = isValid && product.price?.sellPrice >= priceRange[0] && product.price?.sellPrice <= priceRange[1];
          } else{
            isValid = isValid && product.price?.productPrice >= priceRange[0] && product.price?.productPrice <= priceRange[1];
          }
        }




        if (shipping) {
          isValid = isValid && product.freeShipping === shipping;
        }
    
        return isValid;
      });

      state.filterProducts = filteredProducts;
      
    },
  },
})

// Action creators are generated for each case reducer function
export const {  setProduct,setProducts,updateProducts,updateSingleProduct,setSelectedProduct,updateVariant,setFilterProducts } = productSlice.actions

export default productSlice.reducer