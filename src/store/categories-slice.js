import { createSlice } from "@reduxjs/toolkit";

const initialState = { category: [] };

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory(action, payload) {},
  },
});
