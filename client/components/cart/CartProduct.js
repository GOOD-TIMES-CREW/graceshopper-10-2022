import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../features/productsSlice";
import Button from "react-bootstrap/Button";
import { CartContext } from "./CartContext";

function CartProduct(props) {
  const dispatch = useDispatch();
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const products = useSelector((state) => state.products.products);

  const product = products.filter((product) => product.id === id);
  console.log(product);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <img
        style={{ height: "100px", width: "100px" }}
        src={product[0].imageUrl}
      ></img>
      <h3>{product[0].name}</h3>
      <p>{quantity} total</p>
      <p>${(quantity * product[0].price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr></hr>
    </>
  );
}

export default CartProduct;
