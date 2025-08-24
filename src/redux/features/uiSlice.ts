import { TRatingModal } from '@/components/modals/comment-modal'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



type TInitialStateType = {
    cartSidebarOpen: boolean,
    commentModalOpen: null | TRatingModal,
    
}

const initialState:TInitialStateType  = {
  cartSidebarOpen: false,
  commentModalOpen: null
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCartSidebarOpen:(state, action: PayloadAction<boolean>) => {
        state.cartSidebarOpen = action.payload ? action?.payload : false;
    },
    setCommentModal:(state, action: PayloadAction<null | TRatingModal>) => {
        state.commentModalOpen = action.payload ? action?.payload : null;
    },
  },
})

// Action creators are generated for each case reducer function
export const {  setCartSidebarOpen,setCommentModal } = uiSlice.actions

export default uiSlice.reducer