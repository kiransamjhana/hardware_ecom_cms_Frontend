import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
};
const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setSystem: (state, { payload }) => {
      if (state.cats.length === 0 && payload.length === 0) {
        return;
      }
      state.system = payload;
    },
  },
});

const { reducer, actions } = systemSlice;
export const { systemSliceCats } = actions;
export default reducer;
ß;
