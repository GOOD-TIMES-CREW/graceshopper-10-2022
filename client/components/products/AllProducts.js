import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";

function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="all-products">
      {products?.map((product) => {
        return (
          <div key={product.id} className="product-label">
            <img src={product.imageUrl} />
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
