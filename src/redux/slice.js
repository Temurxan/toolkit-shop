import { createSlice } from "@reduxjs/toolkit";
import generate from "../utils/idGenerate";
import { useNavigate } from "react-router-dom";
const slice = createSlice({
  name: "admin",
  initialState: {
    isOpen: false,
    products: [],
    categories: ["kids", "man", "woman", "oversize"],
    basket: [],
    product: { name: "", price: "", category: "", img: "" }
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state) => {
      state.products.push({ ...state.product, id: generate(state.products) });
      localStorage.setItem("products", JSON.stringify(state.products));
      state.product = { name: "", price: "", category: "", img: "" };
    },
    handleChange: (state, action) => {
      state.product = action.payload;
    },
    getBassket: (state, action) => {
      state.basket = action.payload;
    },
    basketPlus: (state, action) => {
      state.basket.map((item) => {
        if (item.id === action.payload) {
          item.count++;
        }
      });

      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    basketMinus: (state, action) => {
      state.basket.map((item) => {
        if (item.id === action.payload) {
          if (item.count > 1) {
            item.count--;
          }
        }
      });
      localStorage.setItem("basket", JSON.stringify(state.basket));
    }
  }
});

function getFile(file) {
  return (dispatch) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch({
        type: "admin/handleChange",
        payload: {
          ...slice.getInitialState().product,
          img: reader.result
        }
      });
    };
  };
}

function loadProducts() {
  return {
    type: "apiCall",
    payload: {
      url: "/products",
      method: "GET",
      onSuccess: sliceAction.getProducts
    }
  };
}

function loadBasketProducts() {
  return {
    type: "apiCall",
    payload: {
      url: "/basket",
      method: "GET",
      onSuccess: sliceAction.getBassket
    }
  };
}


function addToBasket(item){
  return {
    type: "apiCall",
    payload: {
      url: "/basket",
      method: "POST",
      data:{...item,count:1},
      onSuccess: loadBasketProducts
    }
  };
}

export const sliceAction = {
  ...slice.actions,
  getFile,
  loadProducts,
  loadBasketProducts,
  addToBasket
};
export default slice;
