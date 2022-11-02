import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "./productsSlice";
import ProductView from "./ProductView";

function FeaturedProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-b from-transparent to-blue-600">
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-10 mx:auto">
        {products
          ?.slice(0, 6)
          .map(({ id, name, price, description, genre, imageUrl }) => {
            return (
              <ProductView
                key={id}
                name={name}
                price={price}
                description={description}
                genre={genre}
                imageUrl={imageUrl}
              />
            );
          })}
      </div>
    </div>
  );
}

export default FeaturedProducts;
