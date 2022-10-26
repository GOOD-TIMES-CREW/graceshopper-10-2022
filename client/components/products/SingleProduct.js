import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../features/productsSlice";

function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch]);

  return (
    <ul>
      <p>SINGLE PRODUCT AREA</p>;
      <div key={product.id} className="product-label">
        <img src={product.imageUrl} />
        <p>Name: {product.name}</p>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>{product.genre}</p>
        <p>In Stock: {product.inventory}</p>
      </div>
    </ul>
  );
}

// (all products display)
//image, name, description, price

//(single product display)
//image
//id
//name
//description
//price
//inventory
//genre

export default SingleProduct;
