import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../features/products/productsSlice";
import { useNavigate } from "react-router-dom";
import ProductCard from "../products/ProductCard";

function Store() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <h1 align="center" className="p-3">
        Welcome!
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

export default Store;
