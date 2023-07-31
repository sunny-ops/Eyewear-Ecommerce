import isLogin from "./isLogin";
import userInfo from "./userInfo";
import cartInfo from "./cartInfo";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  isLoginStore: isLogin,
  userInfoStore: userInfo,
  cartInfoStore: cartInfo,
});

const persitConfig = {
  key: "root",
  storage,
  whitelist: ["isLoginStore", "userInfoStore", "cartInfoStore"],
};

const store = configureStore({
  reducer: persistReducer(persitConfig, reducers),
});

export const persistor = persistStore(store);
export default store;
