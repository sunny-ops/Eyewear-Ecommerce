import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartInfo: [{ id: 0, cnt: 1, size: 0, color: 1 }],
};

const cartInfoStore = createSlice({
  name: "cartInfoStore",
  initialState,
  reducers: {
    addItemFn: (state, action) => {
      state.cartInfo.push(action.payload);
      console.log("cartInfo.js - cartInfo", state.cartInfo);
    },
  },
});
export const { addItemFn } = cartInfoStore.actions;
export default cartInfoStore.reducer;
