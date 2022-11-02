import React from "react";
import NavbarComponent from "../features/navbar/NavbarComponent";
import AppRoutes from "./AppRoutes";
import Footer from "../features/footer/Footer";

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
