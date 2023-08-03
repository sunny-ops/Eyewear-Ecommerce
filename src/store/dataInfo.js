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
      // console.log(action.payload);
      console.log(state.dataInfo[action.payload].added);
      state.dataInfo[action.payload].added = true;
    },

    removeFromCartFn: (state, action) => {
      state.dataInfo[action.payload].added = false;
    },
  },
});
export const { addToCartFn, removeFromCartFn } = dataInfoStore.actions;
export default dataInfoStore.reducer;
