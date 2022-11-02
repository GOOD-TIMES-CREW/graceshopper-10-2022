import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import { Button, Container, Navbar, Nav, Modal } from "react-bootstrap";
import CartProduct from "../cart/CartProduct";
import { me } from "../auth/authSlice";
import { getAmount } from "../cart/cartSlice";

function NavbarComponent() {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);

  useEffect(() => {
    dispatch(me());
  }, []);

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
  }, []);
  return (
    <>
      {isLoggedIn && !isAdmin ? (
        <>
          <Navbar expand="sm" bg="dark" variant="dark" sticky="top">
            <Container>
              <Navbar.Brand href="/">The Good Old Days</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/products">All Products</Nav.Link>
                <Nav.Link href="/order_history">Order History</Nav.Link>
              </Nav>
              <button type="button" onClick={logoutAndRedirectHome}>
                Logout
              </button>
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
                    <Button variant="success">Purchase items!</Button>
                  </>
                ) : (
                  <h1>There are no items in your cart!</h1>
                )}
              </Modal.Body>
            </Modal>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
          {isAdmin && (
            <>
              {" "}
           <Nav.Link href="/adminpage">Administration</Nav.Link>

            </>
          )}
        </Nav>

                  <h1>Total: ${cart.cartTotalPrice}</h1>
                  <Button variant="success">Purchase items!</Button>
                </>
              ) : (
                <h1>There are no items in your cart!</h1>
              )}
            </Modal.Body>
          </Modal>
        </>
        
      ) : (
        <>
          <Navbar expand="sm" bg="dark" variant="dark" sticky="top">
            <Container>
              <Navbar.Brand href="/">The Good Old Days</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/products">All Products</Nav.Link>
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
                  <Button variant="success">Purchase items!</Button>
                </>
              ) : (
                <h1>There are no items in your cart!</h1>
              )}
            </Modal.Body>
          </Modal>
        </>
      )}
      {isLoggedIn && isAdmin && (
        <>
          {" "}
          <Nav.Link href="/home">Home</Nav.Link>{" "}
          <Nav.Link href="/users">Users</Nav.Link>{" "}
          <Nav.Link href="/orders">Orders</Nav.Link>{" "}
          <button type="button" onClick={logoutAndRedirectHome}>
            Logout
          </button>
        </>
      )}
    </>
  );
}

export default NavbarComponent;
