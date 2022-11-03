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
    <div className="grid">
      {cart.cartProducts.map((cartProduct) => {
        return (
          <div key={cartProduct.id} className="pt-10 bg-pink-200 pt-10">
            <img src={cartProduct.imageUrl} />
            <div className="col-span-3 mx-5">
              <h1 className="font-bold">{cartProduct.name}</h1>
              <h3 className="font-bold">${cartProduct.price}</h3>
              {/* <p className="text-xs my-2">{cartProduct.description}</p> */}
            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
              <div className="font-extrabold">
                Quantity: {cartProduct.cartQuantity}
              </div>
              <button
                className="p-2 text-xs font-extrabold md:text-sm bg-gradient-to-b from-blue-200 to-blue-400 border border-blue-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 active:from-blue-500"
                onClick={() => handleDecrement(cartProduct)}
              >
                -
              </button>
              <button
                className="p-2 text-xs font-extrabold md:text-sm bg-gradient-to-b from-blue-200 to-blue-400 border border-blue-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 active:from-blue-500"
                onClick={() => handleAddToCart(cartProduct)}
              >
                +
              </button>
            </div>

            <button
              className="p-2 text-xs font-extrabold md:text-sm bg-gradient-to-b from-blue-200 to-blue-400 border border-blue-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 active:from-blue-500"
              onClick={() => handleRemoveFromCart(cartProduct)}
            >
              Remove from Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CartProducts;
