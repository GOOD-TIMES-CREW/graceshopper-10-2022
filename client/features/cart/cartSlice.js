import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [],
  cartTotalPrice: 0,
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex >= 0) {
        state.cartProducts[productIndex].cartQuantity++;
      } else {
        const newProduct = { ...action.payload, cartQuantity: 1 };
        state.cartProducts.push(newProduct);
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    removeFromCart: (state, action) => {
      const remainingProducts = state.cartProducts.filter(
        (cartProduct) => cartProduct.id !== action.payload.id
      );
      state.cartProducts = remainingProducts;
      localStorage.setItem("cartProdcts", JSON.stringify(state.cartProducts));
    },
    decrementQuantity(state, action) {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (state.cartProducts[productIndex].cartQuantity > 1) {
        state.cartProducts[productIndex].cartQuantity--;
      } else if (state.cartProducts[productIndex].cartQuantity === 1) {
        const remainingProducts = state.cartProducts.filter(
          (product) => product.id !== action.payload.id
        );
        state.cartProducts = remainingProducts;
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    getAmount(state, action) {
      const total = state.cartProducts.reduce(
        (cartTotal, product) => {
          const { price, cartQuantity } = product;
          const productTotalPrice = price * cartQuantity;

          cartTotal.totalPrice += productTotalPrice;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        { totalPrice: 0, quantity: 0 }
      );
      state.cartTotalPrice = total.totalPrice;
      state.cartTotalQuantity = total.quantity;
    },
  },
});

export const { addToCart, removeFromCart, decrementQuantity, getAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
