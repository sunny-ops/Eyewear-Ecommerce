import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartInfo: [{ id: 0, cnt: 1, size: 0, color: 1 }],
};

const cartInfoStore = createSlice({
  name: "cartInfoStore",
  initialState,
  reducers: {
    addItemFn: (state, action) => {
      // console.log(action.payload);
      state.cartInfo.push(action.payload);
      console.log("cartInfo.js - cartInfo", state.cartInfo);
    },
    removeItemFn: (state, action) => {
      // console.log("cartInfo.js - cartpayload", action.payload);
      state.cartInfo.splice(action.payload, 1);
    },
    clearCartFn: (state) => {
      // console.log("clear!");
      state.cartInfo = [];
    },
    addItemCountFn: (state, action) => {
      let index = action.payload;
      // console.log(state.cartInfo[index]);
      if (state.cartInfo[index].cnt < 10) {
        state.cartInfo[index].cnt += 1;
      }
    },
    subtractItemCountFn: (state, action) => {
      let index = action.payload;
      // console.log(state.cartInfo[index]);
      if (state.cartInfo[index].cnt > 0) {
        state.cartInfo[index].cnt -= 1;
      }
    },
  },
});
export const {
  addItemFn,
  removeItemFn,
  clearCartFn,
  addItemCountFn,
  subtractItemCountFn,
} = cartInfoStore.actions;
export default cartInfoStore.reducer;
