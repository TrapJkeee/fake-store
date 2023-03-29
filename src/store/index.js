import { configureStore } from "@reduxjs/toolkit";
import productsReduser from "./products-slice";
import cartReduser from "./cart-slice";

const store = configureStore({
  reducer: {
    products: productsReduser.reducer,
    cart: cartReduser.reducer,
  },
});

export default store;
