import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import {
  addToCart,
  decrementQuantity,
  getAmount,
  removeFromCart,
} from "../cart/cartSlice";
import { addToUserCart, removeFromUserCart } from "../cart/userCartSlice";
import CartProduct from "./CartProduct";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.userCart);
  const userId = useSelector((state) => state.auth.me.id);

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
    <div>
      {cart.cartProducts.map((product, idx) => (
        <div key={idx}>
          <CartProduct key={idx} product={product} />
          <Form as={Row}>
            <Form.Label column="true" sm="6">
              In Cart: {product.cartQuantity}
            </Form.Label>
            <Col sm="6">
              <Button
                sm="6"
                onClick={() => handleAdd(product)}
                className="mx-2"
              >
                +
              </Button>
              <Button
                sm="6"
                onClick={() => handleDecrement(product)}
                className="mx-2"
              >
                -
              </Button>
            </Col>
          </Form>
          <Button
            variant="danger"
            onClick={() => handleRemoveFromCart(product)}
            className="my-2"
          >
            Remove from cart
          </Button>
        </div>
      ))}
      <h1>Total: ${cart.cartTotalPrice}</h1>
      <Button variant="success">Purchase items!</Button>
    </div>
  );
}

export default Cart;
