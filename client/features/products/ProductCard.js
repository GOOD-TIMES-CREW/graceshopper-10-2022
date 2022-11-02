import React, { useEffect } from "react";
import { Card, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  decrementQuantity,
  getAmount,
  removeFromCart,
} from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductCard({ product, handleDeleteProduct, isAdmin }) {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
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
    dispatch(getAmount());
  }, [cart]);

  return (
    <Card>
      <Card.Body>
        <Card.Img
          variant="top"
          src={product.imageUrl}
          onClick={() => Navigate(`/products/${product.id}`)}
        />
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        {getCurrentProductQuantity(product) > 0 ? (
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
          <Stack direction="horizontal" gap={3}>
            <Button variant="primary" onClick={() => handleAdd(product)}>
              Add To Cart
            </Button>

            {isAdmin && (
              <>
                <div className="vr" />
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete Product
                </Button>
              </>
            )}
          </Stack>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
