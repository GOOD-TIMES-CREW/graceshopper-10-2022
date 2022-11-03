import React from "react";
import { useSelector } from "react-redux";
import Banner from "../banner/Banner";
import FeaturedProducts from "../products/FeaturedProducts";
import AllOrders from "../user/AllOrders";
import AllUsers from "../user/AllUsers";

/**
 * COMPONENT
 */
const Home = () => {
  const { firstName, lastName, isAdmin } = useSelector(
    (state) => state.auth.me
  );

  return (
    <div>
      {isAdmin ? (
        <div>
          <h3>
            Welcome, {firstName} {lastName}
          </h3>
          <h4 style={{ color: "blue" }}>
            You are an Administrator, with great power comes great
            responsibility! 😉
          </h4>
          <AllOrders />
          <AllUsers />
        </div>
      ) : (
        <div>
          <Banner />
          <FeaturedProducts />
        </div>
      )}
    </div>
  );
};

export default Home;
