import { TProduct, TVariation } from '@/types/product.type'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



type TInitialStateType = {
    product: TProduct,
    products: TProduct[],
    selectedProduct: TProduct | null,
    variant: TVariation | null;
}

const initialState:TInitialStateType  = {
  product: {} as TProduct,
  products: [],
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
    }
   
  },
})

// Action creators are generated for each case reducer function
export const {  setProduct,setProducts,updateProducts,updateSingleProduct,setSelectedProduct,updateVariant } = productSlice.actions

export default productSlice.reducer