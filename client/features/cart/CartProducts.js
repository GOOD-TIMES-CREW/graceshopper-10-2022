import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import {
  addToCart,
  decrementQuantity,
  getAmount,
  removeFromCart,
} from "./cartSlice";

function CartProducts() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getAmount());
  }, [cart]);

  const handleRemoveFromCart = (cartProduct) => {
    dispatch(removeFromCart(cartProduct));
  };

  const handleDecrement = (cartProduct) => {
    dispatch(decrementQuantity(cartProduct));
  };

  const handleAddToCart = (cartProduct) => {
    dispatch(addToCart(cartProduct));
  };

  return (
    <div>
      {cart.cartProducts.map((cartProduct) => {
        return (
          <div key={cartProduct.id}>
            <img src={cartProduct.imageUrl} />
            <p>{cartProduct.name}</p>
            <button onClick={() => handleRemoveFromCart(cartProduct)}>
              Remove from Cart
            </button>
            <p>{cartProduct.price}</p>
            <button onClick={() => handleDecrement(cartProduct)}>-</button>
            <div>{cartProduct.cartQuantity}</div>
            <button onClick={() => handleAddToCart(cartProduct)}>+</button>
          </div>
        );
      })}
      <h2>Total: ${cart.cartTotalPrice}</h2>
    </div>
  );
}

export default CartProducts;
