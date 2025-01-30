import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  productReducer  from "./features/productSlice";
import  authReducer  from "./features/authSlice";
import  categoryReducer  from "./features/categorySlice";
import  brandReducer  from "./features/brandSlice";
import  mediaReducer  from "./features/mediaSlice";
import  attributeReducer  from "./features/attributeSlice";
import  attributeConfigReducer  from "./features/attributeConfigSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistAuth = {
    key: 'auth',
    storage,
  }

const persistedAuthReducer = persistReducer(persistAuth, authReducer)

const rootReducer = combineReducers({
    product: productReducer,
    auth: persistedAuthReducer,
    category: categoryReducer,
    brand: brandReducer,
    media: mediaReducer,
    attribute: attributeReducer,
    attributeConfig: attributeConfigReducer,
})

export  const store = configureStore({
    reducer:rootReducer
})


export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch