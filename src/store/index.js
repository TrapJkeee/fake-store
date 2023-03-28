import { configureStore } from "@reduxjs/toolkit";
import productsReduser from "./products-slice";

const store = configureStore({
  reducer: {
    products: productsReduser.reducer,
  },
});

export default store;
