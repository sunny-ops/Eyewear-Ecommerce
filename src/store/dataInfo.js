import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data";
const initialState = {
  dataInfo: data,
};
const dataInfoStore = createSlice({
  name: "dataInfoStore",
  initialState,
  reducers: {
    addToCartFn: (state, action) => {
      state.dataInfo[action.payload].added = true;
    },

    removeFromCartFn: (state, action) => {
      state.dataInfo[action.payload].added = false;
    },

    removeAllCartFn: (state) => {
      for (let ele of state.dataInfo) {
        ele.added = false;
      }
    },
  },
});
export const { addToCartFn, removeFromCartFn, removeAllCartFn } =
  dataInfoStore.actions;
export default dataInfoStore.reducer;
