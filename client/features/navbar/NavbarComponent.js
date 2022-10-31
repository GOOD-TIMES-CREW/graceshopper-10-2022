import React, { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import { Button, Container, Navbar, Nav, Modal } from "react-bootstrap";
import { CartContext } from "../cart/CartContext";
import CartProduct from "../cart/CartProduct";
import { getAmount } from "../cart/cartSlice";

function NavbarComponent() {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cart);
  const productsCount = cart.cartTotalQuantity;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getAmount());
  }, [cart]);
  return (
    <>
      {isLoggedIn ? (
        <Nav className="me-auto">
          <div>
            {/* The navbar will show these links after you log in */}

            <Nav.Link href="/home">Home</Nav.Link>

            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        </Nav>
      ) : (
        <>
          <Navbar expand="sm" bg="dark" variant="dark" sticky="top">
            <Container>
              <Navbar.Brand href="/">The Good Old Days</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Sign Up</Nav.Link>
                <Nav.Link href="/products">All Products</Nav.Link>
                {/*Temporary, will switch this to only show up when admin is logged in later*/}
                <Nav.Link href="/users">All Users</Nav.Link>
                <Nav.Link href="/order_history">Order History</Nav.Link>
              </Nav>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Button onClick={handleShow}>
                  Cart: ({productsCount} Items)
                </Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {productsCount > 0 ? (
                <>
                  <p>Items in your cart:</p>
                  {cart.cartProducts.map((currentProduct, idx) => (
                    <CartProduct
                      key={idx}
                      product={currentProduct}
                    ></CartProduct>
                  ))}

                  <h1>Total: ${cart.cartTotalPrice}</h1>
                  {/* onClick={checkout} */}
                  <Button variant="success">Purchase items!</Button>
                </>
              ) : (
                <h1>There are no items in your cart!</h1>
              )}
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
}

export default NavbarComponent;
