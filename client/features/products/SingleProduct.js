import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../cart/CartContext";
import { fetchSingleProduct } from "./productsSlice.js";

function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cart = useContext(CartContext);
  const product = useSelector((state) => state.products.product);
  const productQuantity = cart.getProductQuantity(product.id);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch]);

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
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default SingleProduct;

// return (
//   <ul>
//     <div key={product.id} className="product-label, font-center">
//       <img src={product.imageUrl} />
//       <p>{product.name}</p>
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//       <p>Genre: {product.genre}</p>
//       <p>Current Stock: {product.inventory}</p>
//       <button>Add to Cart</button>
//     </div>
//   </ul>
// );
