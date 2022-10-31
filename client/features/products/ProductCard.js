import React, { useContext } from "react";
import {
  Card,
  Button,
  Form,
  Row,
  Col,
  Container,
  Stack,
} from "react-bootstrap";
import { CartContext } from "../cart/CartContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, handleDeleteProduct, isAdmin }) {
  const Navigate = useNavigate();
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

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
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  sm="6"
                  onClick={() => cart.addOneToCart(product.id)}
                  className="mx-2"
                >
                  +
                </Button>
                <Button
                  sm="6"
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="mx-2"
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              onClick={() => cart.deleteFromCart(product.id)}
              className="my-2"
            >
              Remove from cart
            </Button>
          </>
        ) : (
          <Stack direction="horizontal" gap={3}>
            <Button
              variant="primary"
              onClick={() => cart.addOneToCart(product.id)}
            >
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
