import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "./productsSlice";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <h1 align="center" className="p-3">
        All Products
      </h1>
      <Row xs={1} md={3} className="g-4">
        {products?.map((product) => (
          <Col align="center" key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AllProducts;

// return (
//   <div className="all-products">
//     {products?.map((product) => {
//       return (
//         <div key={product.id} className="product-label">
//           <img
//             src={product.imageUrl}
//             onClick={() => Navigate(`/products/${product.id}`)}
//           />
//           <div className="font-center">
//             <p>{product.name}</p>
//             <p>${product.price}</p>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// );
