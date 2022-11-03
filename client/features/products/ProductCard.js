import React, { useEffect, useState } from "react";
import { Card, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {
  addToCart,
  decrementQuantity,
  getAmount,
  removeFromCart,
} from "../cart/cartSlice";
import { addToUserCart, removeFromUserCart } from "../cart/userCartSlice";
import { useDispatch, useSelector } from "react-redux";

const MAX_RATING = 5;
const MIN_RATING = 1;

function ProductCard({ product, handleDeleteProduct }) {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);
  const cart = useSelector((state) => state.cart);

  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5 ? true : false);
  const userCart = useSelector((state) => state.userCart);


  const getCurrentProductQuantity = (product) => {
    for (let i = 0; i < cart.cartProducts.length; i++) {
      if (product.name === cart.cartProducts[i].name)
        return cart.cartProducts[i].cartQuantity;
    }
    return 0;
  };
  const getCurrentCartProduct = (product) => {
    if (userId) {
      for (let i = 0; i < userCart.cartProducts.length; i++) {
        if (product.name === userCart.cartProducts[i].name)
          return userCart.cartProducts[i];
      }
    } else {
      for (let i = 0; i < cart.cartProducts.length; i++) {
        if (product.name === cart.cartProducts[i].name)
          return cart.cartProducts[i];
      }
    }
    return 0;
  };

  const handleRemoveFromCart = (cartProduct) => {
    if (userId) {
      dispatch(removeFromCart(product));
      dispatch(
        removeFromUserCart({
          productId: product.id,
          userId,
          quantityRemoved: cartProduct.cartQuantity,
          totalQuantity: cartProduct.cartQuantity,
        })
      );
    } else {
      dispatch(removeFromCart(cartProduct));
    }
  };
  const handleDecrement = (cartProduct) => {
    if (userId) {
      dispatch(decrementQuantity(product));
      dispatch(
        removeFromUserCart({
          productId: product.id,
          userId,
          quantityRemoved: cartProduct.cartQuantity - 1,
          totalQuantity: cartProduct.cartQuantity,
        })
      );
    } else {
      dispatch(decrementQuantity(cartProduct));
    }
  };
  const handleAdd = (cartProduct, product) => {
    console.log(cartProduct.cartQuantity);
    if (userId) {
      dispatch(addToCart(product));
      cartProduct.cartQuantity
        ? dispatch(
            addToUserCart({
              productId: product.id,
              userId,
              totalQuantity: cartProduct.cartQuantity,
            })
          )
        : dispatch(
            addToUserCart({
              productId: product.id,
              userId,
              totalQuantity: 0,
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
    <div className="relative flex flex-col m-5 z-30 p-10 bg-pink-200">
      <p className="absolute top-2 right-2 text-xs italic text-gray-600">
        {product.genre}
      </p>
      <Card.Img
        variant="top"
        src={product.imageUrl}
        onClick={() => Navigate(`/products/${product.id}`)}
      />
      <h2 className="my-3">{product.name}</h2>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <div key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ))}
      </div>
      <p className="mb-5">${product.price}</p>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <p className="text-xs text-gray-500">FREE Delivery</p>
        </div>
      )}
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
          <Button
            className="mt-auto button"
            variant="primary"
            onClick={() => handleAdd(product)}
          >
            <img
              loading="lazy"
              src="https://i.ibb.co/m0Xkjdd/addtocart.png"
              alt=""
            ></img>
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
    </div>
  );
}

export default ProductCard;
