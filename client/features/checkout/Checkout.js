import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.userCart);
  const userId = useSelector((state) => state.auth.me.id);
  const productsCount = cart?.cartTotalQuantity;

  const handleRemoveFromCart = (product) => {
    if (userId) {
      dispatch(removeFromCart(product));
      dispatch(
        removeFromUserCart({
          productId: product.id,
          userId,
          quantityRemoved: product.cartQuantity,
          totalQuantity: product.cartQuantity,
        })
      );
    } else {
      dispatch(removeFromCart(product));
    }
  };
  const handleDecrement = (product) => {
    if (userId) {
      dispatch(decrementQuantity(product));
      dispatch(
        removeFromUserCart({
          productId: product.id,
          userId,
          quantityRemoved: product.cartQuantity - 1,
          totalQuantity: product.cartQuantity,
        })
      );
    } else {
      dispatch(decrementQuantity(product));
    }
  };
  const handleAdd = (product) => {
    if (userId) {
      dispatch(addToCart(product));
      dispatch(
        addToUserCart({
          productId: product.id,
          userId,
          totalQuantity: product.cartQuantity,
        })
      );
    } else {
      dispatch(addToCart(product));
    }
  };

  useEffect(() => {
    dispatch(getAmount());
  }, [cart]);

  return (
    <div className="bg-gray-100">
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {productsCount === 0
                ? "Your Cart is empty."
                : "Your Shopping Cart"}
            </h1>

            {cart.cartProducts.map((item, index) => (
              <CheckoutProduct
                key={item.id}
                name={item.name}
                rating={item.rating}
                price={item.price}
                description={item.description}
                genre={item.genre}
                console={item.console}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {productsCount > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({productsCount} items):
                <span className="font-bold">${cart.cartTotalPrice}</span>
              </h2>
              <button className={`button mt-2`}>Checkout</button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
