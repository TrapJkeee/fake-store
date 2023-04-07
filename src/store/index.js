import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products-slice";
import cartReducer from "./cart-slice";
import sendOrderReducer from "./sendOrder-slice";
import getOrderReducer from "./getOrder-slice";
import modalReducer from "./modal-slice";
import userReducer from "./user-slice";

const store = configureStore({
  reducer: {
    products: productsReducer.reducer,
    cart: cartReducer.reducer,
    sendOrder: sendOrderReducer.reducer,
    getOrder: getOrderReducer.reducer,
    modal: modalReducer.reducer,
    user: userReducer.reducer,
  },
});

export default store;
