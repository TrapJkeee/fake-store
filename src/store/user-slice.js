import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  id: null,
  token: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.token = null;
      state.isLogin = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
