import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], date: "", totalPrice: 0, isOrderSend: false };

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(state, action) {
      const nowDate = new Date();
      const year = nowDate.getFullYear();
      const month = `${nowDate.getMonth() + 1}`.padStart(2, `0`);
      const day = `${nowDate.getDate()}`.padStart(2, `0`);
      state.date = `${day}.${month}.${year}`;
      state.totalPrice = state.totalPrice = action.payload.totalPrice;
      const items = action.payload.items;
      state.items = items;
    },
    clearOrder(state) {
      state = initialState;
      state.isOrderSend = true;
    },
  },
});

export const orderActions = orderSlice.actions;

export const sendOrder = (order) => {
  return async (dispatchAction) => {
    const postOrder = async () => {
      const response = await fetch(
        "https://react-jokes-3409a-default-rtdb.firebaseio.com/order.json",
        {
          method: "POST",
          body: JSON.stringify(order),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Невозможно отправить данные");
      }
    };

    try {
      postOrder();
    } catch (e) {
      console.log(e);
    }
  };
};

export default orderSlice;
