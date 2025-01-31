import { createSlice } from "@reduxjs/toolkit";
import { TBrandType } from "@/types/brand.type";



type TInitialStateType = {
  selectedBrand: TBrandType | null;
  brands: TBrandType[];
};

const initialState: TInitialStateType = {
    selectedBrand: null,
    brands: [],
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    addBrands: (state, action: { payload: TBrandType[] }) => {
      // Set all brands
        state.brands = [ ...action?.payload ];
    },
    setSelectedBrand: (state, action: { payload: TBrandType | null }) => {
      // Update selected brand state
      state.selectedBrand = action?.payload;
    },
  },
});

export const { addBrands, setSelectedBrand } = brandSlice.actions;
export default brandSlice.reducer;
