import React from "react";
import { useSelector } from "react-redux";

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
        </div>
      ) : (
        <div>
          <h3>
            Welcome, {firstName} {lastName}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Home;
