import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../features/productsSlice";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="all-products">
      {products?.map((product) => {
        return (
          <div key={product.id} className="product-label">
            <img
              src={product.imageUrl}
              onClick={() => Navigate(`/products/${product.id}`)}
            />
            {console.log(product.id)}
            <p>Name: {product.name}</p>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>{product.genre}</p>
            <p>In Stock: {product.inventory}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllProducts;
