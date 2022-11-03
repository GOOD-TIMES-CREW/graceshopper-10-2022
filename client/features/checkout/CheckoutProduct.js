import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CheckoutProduct({
  id,
  name,
  price,
  rating,
  description,
  genre,
  console,
  imageUrl,
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.userCart);
  const userId = useSelector((state) => state.auth.me.id);
  const productsCount = cart.cartTotalQuantity;

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

  const addItemToCart = () => {
    const product = {
      id,
      name,
      price,
      rating,
      description,
      genre,
      console,
      imageUrl,
    };

    dispatch(addToCart(product));
  };

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      {/* <Image src={image} height={200} width={200} objectFit="contain" /> */}

      <img src={imageUrl} alt="" />
      <div className="col-span-3 mx-5">
        <p>{name}</p>
        {/* <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div> */}
        <p className="text-md my-2">${price}</p>
        {/* 
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
            />
            <p className="text-xs mt-auto">FREE Delivery</p>
          </div>
        )} */}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <Form as={Row}>
          <Form.Label column="true" sm="6">
            In Cart: {product.cartQuantity}
          </Form.Label>
          <Col sm="6">
            <Button sm="6" onClick={() => handleAdd(product)} className="mx-2">
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
    </div>
  );
}

export default CheckoutProduct;
