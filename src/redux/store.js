import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import thunk from "redux-thunk";
import slice from "./slice";
import sliceOrder from "./sliceOrder";

const apiMiddlewere = (store) => (next) => (action) => {
  const { url, method, onSuccess, data } = action.payload;

  if (action.type === "apiCall") {
    axios({
      baseURL: " http://localhost:3001",
      url,
      method,
      data
    }).then((res) => {
      store.dispatch(onSuccess(res.data));
    });
  } else {
    next(action);
  }
};

const store = configureStore({
  reducer: {
    productReducer: slice.reducer,
    orderReducer: sliceOrder.reducer
  },
  middleware: [thunk, apiMiddlewere]
});

export default store;
