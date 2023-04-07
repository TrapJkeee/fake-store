import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const getOrderSlice = createSlice({
  name: "getOrder",
  initialState,
  reducers: {
    addOrder(state, action) {
      const orders = action.payload;
      for (const key in orders) {
        const existingOrder = state.find((item) => item.id === key);
        if (!existingOrder) {
          state.push({
            id: key,
            items: orders[key].items,
            date: orders[key].date,
            totalPrice: orders[key].totalPrice,
            userId: orders[key].userId,
          });
        }
      }
    },
  },
});

export const getOrderActions = getOrderSlice.actions;

export const getOrder = () => {
  return async (dispatchAction) => {
    const fetchOrder = async () => {
      const response = await fetch(
        "https://react-jokes-3409a-default-rtdb.firebaseio.com/order.json"
      );
      if (!response.ok) {
        throw new Error("Невозможно извлечь данные");
      }
      const data = await response.json();

      return data;
    };

    try {
      const orders = await fetchOrder();

      dispatchAction(getOrderActions.addOrder(orders));
    } catch (e) {
      console.log(e);
    }
  };
};

export default getOrderSlice;
