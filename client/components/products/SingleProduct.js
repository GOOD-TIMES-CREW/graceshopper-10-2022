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
      <div key={product.id} className="product-label, font-center">
        <img src={product.imageUrl} />
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>Genre: {product.genre}</p>
        <p>Current Stock: {product.inventory}</p>
        <button>Add to Cart</button>
      </div>
    </ul>
  );
}

export default SingleProduct;
