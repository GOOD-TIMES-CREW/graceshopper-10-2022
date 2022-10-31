import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../features/products/productsSlice";
import Button from "react-bootstrap/Button";
// import { CartContext } from "./CartContext";
import {
  addToCart,
  decrementQuantity,
  getAmount,
  removeFromCart,
} from "./cartSlice";

function CartProduct(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const product = props.product;
  console.log(product);

  useEffect(() => {
    dispatch(getAmount());
  }, [cart]);

  const handleRemoveFromCart = (cartProduct) => {
    dispatch(removeFromCart(cartProduct));
  };
  // const handleDecrement = (cartProduct) => {
  //   dispatch(decrementQuantity(cartProduct))
  // };
  // const handleAdd = (cartProduct) => {
  //   dispatch(addToCart(cartProduct))
  // }

  return (
    <>
      <img
        style={{ height: "100px", width: "100px" }}
        src={product.imageUrl}
      ></img>
      <h3>{product.name}</h3>
      <p>{product.cartQuantity} total</p>
      <p>${(product.cartQuantity * product.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => handleRemoveFromCart(product)}>
        Remove
      </Button>
      <hr></hr>
    </>
  );
}

export default CartProduct;
