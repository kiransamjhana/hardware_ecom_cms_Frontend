import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admins: {},
};
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmins: (state, { payload }) => {
      state.admins = payload;
    },
  },
});

const { reducer, actions } = adminSlice;
export const { setAdmins } = actions;
export default reducer;
