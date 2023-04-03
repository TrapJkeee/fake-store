import { configureStore } from "@reduxjs/toolkit";
import productsReduser from "./products-slice";
import cartReduser from "./cart-slice";
import sendOrderReduser from "./sendOrder-slice";
import getOrderReduser from "./getOrder-slice";

const store = configureStore({
  reducer: {
    products: productsReduser.reducer,
    cart: cartReduser.reducer,
    sendOrder: sendOrderReduser.reducer,
    getOrder: getOrderReduser.reducer,
  },
});

export default store;
