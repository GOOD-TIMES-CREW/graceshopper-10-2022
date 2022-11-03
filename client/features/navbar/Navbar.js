import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartProducts from "../cart/CartProducts";
import { me } from "../auth/authSlice";
import { getAmount } from "../cart/cartSlice";

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const { firstName, lastName, isAdmin } = useSelector(
    (state) => state.auth.me
  );

  useEffect(() => {
    dispatch(me());
  }, []);

  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cart);
  const productsCount = cart.cartTotalQuantity;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getAmount());
  }, []);

  const loginRedirect = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      {/* Top Nav */}
      <div className="bg-[url('https://i.ibb.co/xCXsyMG/Untitled-Artwork-5.png')] w-full bg-cover bg-repeat">
        <div className="flex items-center p-1 flex-grow py-2">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 cursor-pointer">
            <Link to="/">
              <img
                src="https://i.ibb.co/P47rJZW/goodtimesnobg.png"
                alt=""
                className="w-40"
              />
            </Link>
          </div>
          {/* Search Bar */}
          <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-pink-300 hover:bg-pink-500">
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
              placeholder="Find your favorite game..."
              type="text"
            />
            {/* <SearchIcon /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-12 p-4 text-white font-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>

          {/* Right */}
          <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
            <div
              onClick={() =>
                isLoggedIn ? navigate("/users/:id") : navigate("/login")
              }
              className="cursor-pointer hover:underline"
            >
              {isLoggedIn ? (
                <p>
                  Hi, {firstName} {lastName}!
                </p>
              ) : (
                <p>Sign In</p>
              )}
              <p className="font-extrabold md:text-sm">Account & Lists</p>
            </div>
            <div
              onClick={() => navigate("/order_history")}
              className="cursor-pointer hover:underline"
            >
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>
            </div>
            <div
              onClick={() => navigate("/carts")}
              className="relative cursor-pointer hover:underline flex items-center"
            >
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-pink-300 text-center rounded-full text-black font-bold">
                {productsCount}
              </span>
              {/* <ShoppingCartIcon className="h-10" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                Cart
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-purple-400 text-white text-sm">
        {/* <MenuIcon className="h-6 mr-1" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 mr-1 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        {/* <a className="cursor-pointer hover:underline" href="/products">
          All
        </a> */}
        <Link to="/products">All</Link>
        <p className="cursor-pointer hover:underline">Nintendo 64</p>
        <p className="cursor-pointer hover:underline">Sega Genesis</p>
        <p className="cursor-pointer hover:underline">Playstation</p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Gameboy Color
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Sega Saturn
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Gameboy
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Buy Again
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Pokemon World
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Pre-Order PlayStation 2
        </p>
      </div>
    </div>
  );
}

export default Nav;
