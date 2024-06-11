import { createSlice } from "@reduxjs/toolkit";

import product1 from "../images/image-product-1.jpg";
import nail1 from "../images/image-product-1-thumbnail.jpg";

import thumb from "./thumb";

interface Cart {
  quantity: number;
  product: string;
  productIndex: number;
  view: boolean;
  arrowArray: any[];
  order: boolean;
  showCartBasket: boolean;
  price: number;
  orderCount: number;
  thumbNail: string;
  menuStatus: boolean;
}

const initialState: Cart = {
  quantity: 0,
  product: product1,
  productIndex: 0,
  view: false,
  arrowArray: thumb,
  order: false,
  showCartBasket: false,
  price: 0,
  orderCount: 1,
  thumbNail: nail1,
  menuStatus: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQuantity(state) {
      state.quantity++;
      state.price += 125;
    },

    reduceQuantity(state) {
      if (state.quantity > 1) {
        state.quantity--;
        state.price -= 125;
      } else if (state.quantity === 1) {
        state.quantity = 0;
        state.price = 0;
        state.order = false
      }
    },

    showClIckedProduct(state, action) {
      let { sentObj, index } = action.payload;
      (state.product = sentObj.product), (state.thumbNail = sentObj.thumb);
      state.productIndex = index;
    },

    closeClickedProduct(state) {
      state.view = !state.view;
    },

    previous(state) {
      if (state.productIndex > 0) {
        state.productIndex--;
      }
      state.product = state.arrowArray[state.productIndex].product;
      state.thumbNail = state.arrowArray[state.productIndex].thumb;
    },

    next(state) {
      if (state.productIndex < 3) {
        state.productIndex++;
      } else if (state.productIndex === 3) {
        state.productIndex = 3;
      }
      state.product = state.arrowArray[state.productIndex].product;
      state.thumbNail = state.arrowArray[state.productIndex].thumb;
    },

    showOrder(state) {
      state.order = !state.order;
      if (state.order === false) {
        state.quantity = 0;
        state.price = 0;
      } else {
        state.price = state.price;
        state.quantity = state.quantity;
      }
    },

    showCartBasket(state) {
      state.showCartBasket = !state.showCartBasket;
    },

    openMenu(state) {
      state.menuStatus = !state.menuStatus;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
