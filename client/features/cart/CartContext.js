import React, { createContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../features/products/productsSlice";

// creating helper functions for interacting with products in our cart

export const CartContext = createContext({
  // export to give app access
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

// code here for the functions inside the context

export function CartProvider({ children }) {
  // gives react app access to all the things in our context
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [cartProducts, setCartProducts] = useState([]); // this is what is in our cart

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    return quantity === undefined ? 0 : quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // product is not in the cart, we must establish item
      setCartProducts([
        ...cartProducts, // take all the items already in cart products and then add the new product
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // product is in the cart, so we need to update quantity
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 } // product is an object so we need to get all the info from inside of that to overwrite the quantity
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 } // product is an object so we need to get all the info from inside of that to overwrite the quantity
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((product) => product.id !== id)
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      products.map((product) => {
        if (product.id === cartItem.id) {
          totalCost += product.price * cartItem.quantity;
        }
      });
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
