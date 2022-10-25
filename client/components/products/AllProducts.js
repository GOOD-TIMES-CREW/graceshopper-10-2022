import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, selectProducts } from "../features/productSlice";

function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="all-products">
      {products
        ? products.map(({ name, image, price, genre, inventory }) => {
            return (
              <div className="product-label">
                <img src={image} />
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                <p>{genre}</p>
                <p>In Stock: {inventory}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default AllProducts;
