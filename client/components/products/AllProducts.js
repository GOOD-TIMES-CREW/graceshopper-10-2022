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
            <div className="font-center">
              <p>{product.name}</p>
              <p>${product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllProducts;
