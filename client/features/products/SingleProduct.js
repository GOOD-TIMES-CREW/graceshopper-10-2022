import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { fetchSingleProduct } from "./productsSlice.js";
import {
  addToCart,
  decrementQuantity,
  getAmount,
  removeFromCart,
} from "../cart/cartSlice";

function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.products.product);
  const cart = useSelector((state) => state.cart);
  const getCurrentProductQuantity = (product) => {
    for (let i = 0; i < cart.cartProducts.length; i++) {
      if (product.name === cart.cartProducts[i].name)
        return cart.cartProducts[i].cartQuantity;
    }
    return 0;
  };

  const handleRemoveFromCart = (cartProduct) => {
    dispatch(removeFromCart(cartProduct));
  };
  const handleDecrement = (cartProduct) => {
    dispatch(decrementQuantity(cartProduct));
  };
  const handleAdd = (cartProduct) => {
    dispatch(addToCart(cartProduct));
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
    dispatch(getAmount());
  }, [dispatch, cart]);

  return (
    <Card>
      <Card.Body>
        <Card.Img
          variant="top"
          src={product.imageUrl}
          style={{ height: "200px", width: "200px" }}
        />
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Card.Text>${product.description}</Card.Text>
        {getCurrentProductQuantity(product) ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {getCurrentProductQuantity(product)}
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
          </>
        ) : (
          <Button variant="primary" onClick={() => handleAdd(product)}>
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default SingleProduct;
