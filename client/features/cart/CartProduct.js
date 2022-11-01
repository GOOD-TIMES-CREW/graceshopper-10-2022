import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { getAmount, removeFromCart } from "./cartSlice";

function CartProduct(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  
  // o: destructuring would help redability in this component
  const product = props.product;

  useEffect(() => {
    dispatch(getAmount());
  }, [cart]);

  const handleRemoveFromCart = (cartProduct) => {
    dispatch(removeFromCart(cartProduct));
  };

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
