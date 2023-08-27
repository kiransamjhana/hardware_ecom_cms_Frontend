import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admins: {},
  admin: [],
};
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmins: (state, { payload }) => {
      state.admins = payload;
    },
    setAdmin: (state, { payload }) => {
      state.admin = payload;
    },
  },
});

const { reducer, actions } = adminSlice;
export const { setAdmins, setAdmin } = actions;
export default reducer;
