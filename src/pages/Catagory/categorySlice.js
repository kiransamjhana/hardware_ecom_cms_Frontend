import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
};
const adminSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    setCats: (state, { payload }) => {
      if (state.cats.length === 0 && payload.length === 0) {
        return;
      }
      state.cats = payload;
    },
  },
});

const { reducer, actions } = catSlice;
export const { setCats } = actions;
export default reducer;
