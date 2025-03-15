import { areObjectEqual } from "@/helpers/equalObject";
import { TCartItems } from "@/types/cart.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PropsType = {
    carts: TCartItems[]
}

const initialState:PropsType = {
    carts: [],
}

const shoppingCartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        setAllCarts: (state, action:PayloadAction<TCartItems[]>) => {
            state.carts = action?.payload
        },
        addToCart:(state, action:PayloadAction<TCartItems>) => {
            const {product, quantity,attributes} = action?.payload
            const findCart = state.carts?.find((cart) => cart?.product === product);
            if (findCart?.product) {
                if( !areObjectEqual(findCart?.attributes || {}, attributes||{})   ){
                    // Add new product in shopping cart
                    state.carts = [...state.carts, action?.payload]
                }else{
                    // Already exists product in shopping cart
                    state.carts = state.carts?.map(cart => cart?.product === findCart?.product ? ({
                        ...cart,
                        quantity,
                    }) : cart )
                }
                
            }else{
                // Add new product in shopping cart
                state.carts = [...state.carts, action?.payload]
            }
        },
        removeCart:(state, action:PayloadAction<string>) => {
            state.carts = state.carts?.filter(cart => cart?.product !== action?.payload)
        }
    }
})

export const {addToCart,setAllCarts,removeCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;