import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



type TInitialStateType = {
    cartSidebarOpen: boolean,
    
}

const initialState:TInitialStateType  = {
  cartSidebarOpen: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCartSidebarOpen:(state, action: PayloadAction<boolean>) => {
        state.cartSidebarOpen = action.payload ? action?.payload : false;
    },
  },
})

// Action creators are generated for each case reducer function
export const {  setCartSidebarOpen } = uiSlice.actions

export default uiSlice.reducer