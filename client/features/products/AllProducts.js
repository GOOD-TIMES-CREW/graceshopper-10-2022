import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "./productsSlice";
import ProductCard from "./ProductCard";
import { deleteProduct } from "./productsSlice";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { me } from "../auth/authSlice";

// import Sidebar from "../sidebar/Sidebar";

function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(me());
  }, [dispatch]);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-600">
      <>
        <h1 align="center" className="p-3">
          All Products
        </h1>

        {isAdmin && (
          <Link to="/products/add">
            <button className="button mt-8 p-2 text-xs font-extrabold md:text-sm bg-gradient-to-b from-blue-200 to-pink-400 border border-blue-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 active:from-blue-500 text-white">
              Add Product Form
            </button>
          </Link>
        )}
        {/* <Sidebar /> */}
        <Row xs={1} md={3} className="g-4">
          {products?.map((product) => (
            <Col align="center" key={product.id}>
              <ProductCard
                product={product}
                handleDeleteProduct={handleDeleteProduct}
              />
            </Col>
          ))}
        </Row>
      </>
    </div>
  );
}

export default AllProducts;
