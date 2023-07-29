import isLogin from "./isLogin";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  isLoginStore: isLogin,
});

const persitConfig = {
  key: "root",
  storage,
  whitelist: ["isLoginStore"],
};

const store = configureStore({
  reducer: persistReducer(persitConfig, reducers),
});

export const persistor = persistStore(store);
export default store;
