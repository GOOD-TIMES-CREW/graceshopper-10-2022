import React from "react";
import { useSelector } from "react-redux";
import CartProducts from "./CartProducts";

function Cart() {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <CartProducts />
    </div>
  );
}

export default Cart;
