import { configureStore } from "@reduxjs/toolkit";
import productsReduser from "./products-slice";
import cartReduser from "./cart-slice";
import orderReduser from "./order-slice";

const store = configureStore({
  reducer: {
    products: productsReduser.reducer,
    cart: cartReduser.reducer,
    order: orderReduser.reducer,
  },
});

export default store;
