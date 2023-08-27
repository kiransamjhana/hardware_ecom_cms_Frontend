import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payOptions: [],
};
const payOptiosSlice = createSlice({
  name: "payOptions",
  initialState,
  reducers: {
    setCats: (state, { payload }) => {
      if (state.payOptions.length === 0 && payload.length === 0) {
        return;
      }
      state.payOptions = payload;
    },
  },
});

const { reducer, actions } = payOptiosSlice;
export const { setPayOptions } = actions;
export default reducer;
