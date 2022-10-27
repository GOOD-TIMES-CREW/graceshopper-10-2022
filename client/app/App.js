import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import NavbarComponent from "../features/navbar/NavbarComponent";
import AppRoutes from "./AppRoutes";
import { Container } from "react-bootstrap";
import CartProvider from "../features/cart/CartContext";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <CartProvider>
        <Container>
          <NavbarComponent />
          <AppRoutes />
        </Container>
      </CartProvider>
    </div>
  );
};

export default App;

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Navbar from "../components/navbar/Navbar";
// import AppRoutes from "./AppRoutes";
// import Footer from "../components/footer/Footer";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <AppRoutes />
//       <Footer />
//     </div>
//   );
// };

// export default App;
