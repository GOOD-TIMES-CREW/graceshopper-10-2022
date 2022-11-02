import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToUserCart } from "./userCartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { id } = useParams();

  const addItemHandler = (item) => {
    dispatch(addToUserCart({ item, id }));
  };
  return (
    <div>
      {cart.cartProducts.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}

export default Cart;
