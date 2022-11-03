import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import {
  addToCart,
  decrementQuantity,
  getAmount,
  removeFromCart,
} from "./cartSlice";
import CartProducts from "./CartProducts";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getAmount());
  }, [cart]);

  return (
    <div>
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {cart.cartTotalQuantity === 0
                ? "Your cart is empty."
                : "Your Shopping Cart"}
            </h1>
            <CartProducts />
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {cart.cartTotalQuantity > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({cart.cartTotalQuantity} items):
                <span className="font-bold">${cart.cartTotalPrice}</span>
              </h2>
              <button
                onClick={() => navigate("/success")}
                className="p-2 text-xs font-extrabold md:text-sm bg-gradient-to-b from-blue-200 to-pink-400 border border-blue-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 active:from-blue-500 text-white"
              >
                Checkout
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Cart;
