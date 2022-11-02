import React, { useEffect } from "react";
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
  const products = useSelector((state) => state.products.products)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const isAdmin = false;
  // Once authentication is fixed comment this line back in and delete hardcoded line above
  // const isAdmin = useSelector((state) => state.auth.me.isAdmin)


  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(me());
  }, [dispatch]);

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
      {/* <Sidebar /> */}
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
    </>
  );
}

export default AllProducts;
