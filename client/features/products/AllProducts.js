import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "./productsSlice";
import ProductCard from "./ProductCard";
import Pagination from "../pagination/Pagination";
import { deleteProduct } from "./productsSlice";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { me } from "../auth/authSlice";

function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const isAdmin = false;
  // Once authentication is fixed comment this line back in and delete hardcoded line above
  // const isAdmin = useSelector((state) => state.auth.me.isAdmin)

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(me());
  }, [dispatch]);

  // PAGINATION
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(products.length / postsPerPage);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <h1 align="center" className="p-3">
        All Products
      </h1>

      {isAdmin && (
        <Link to="/products/add">
          <Button variant="primary">Add Product Form</Button>
        </Link>
      )}
      <Row xs={1} md={3} className="g-4">
        {products?.map((product) => (
          <Col align="center" key={product.id}>
            <ProductCard
              product={product}
              handleDeleteProduct={handleDeleteProduct}
              isAdmin={isAdmin}
            />
          </Col>
        ))}
      </Row>
      {/* <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} /> */}
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
