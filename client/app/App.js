import React from "react";
import NavbarComponent from "../features/navbar/NavbarComponent";
import AppRoutes from "./AppRoutes";
import Footer from "../features/footer/Footer";
import Navbar from "../features/navbar/Navbar";
import "../../public/stylesheets/style.css";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <NavbarComponent /> */}
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
