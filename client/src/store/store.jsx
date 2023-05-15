import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducers from "../reducers/auth/authReducers";
import productReducers from "../reducers/product/product"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage,
}

const authPersistConfig = {
  key: 'user',
  storage,
  blacklist: ["loading", "status", "error", "success"]
}

const productPersistConfig = {
  key: 'product',
  storage,
  blacklist: ["products", "quantity"]
}


const rootReducer = combineReducers({ 
  auth: persistReducer(authPersistConfig, authReducers),
  product: persistReducer(productPersistConfig, productReducers)
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)