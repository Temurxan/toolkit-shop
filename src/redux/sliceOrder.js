import { createSlice } from "@reduxjs/toolkit";

const sliceOrder = createSlice({
  name: "order",
  initialState: {
    orders: localStorage.getItem("orders")
      ? JSON.parse(localStorage.getItem("orders"))
      : []
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders.push({
        userName: "Ravshan",
        order: action.payload
      });
      localStorage.setItem("orders", JSON.stringify(state.orders));
      
    }
  }
});

export const orderAction = sliceOrder.actions;
export default sliceOrder;
