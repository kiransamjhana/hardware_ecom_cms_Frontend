import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payOptios: [],
};
const payOptiosSlice = createSlice({
  name: "payOptions",
  initialState,
  reducers: {
    setCats: (state, { payload }) => {
      if (state.paymentOptions.length === 0 && payload.length === 0) {
        return;
      }
      state.payOptios = payload;
    },
  },
});

const { reducer, actions } = payOptiosSlice;
export const { setPayOptions } = actions;
export default reducer;
