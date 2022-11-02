import React, { useState } from "react";
// import Image from "next/image";
// import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function ProductView({ id, name, price, description, genre, imageUrl }) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5 ? true : false);

  const addItemToCart = () => {
    const product = {
      id,
      name,
      price,
      description,
      genre,
      imageUrl,
      rating,
      hasPrime,
    };

    dispatch(addToCart(product));
  };

  return (
    // <div className="bg-[url('https://i.ibb.co/xCXsyMG/Untitled-Artwork-5.png')] w-full bg-cover bg-repeat">
    <div className="relative flex flex-col m-5 z-30 p-10 bg-pink-200">
      <p className="absolute top-2 right-2 text-xs italic text-gray-600">
        {genre}
      </p>
      {/* <Image
        src={imageUrl}
        height={300}
        width={200}
        object-fit="contain"
        alt=""
      /> */}
      <img src={imageUrl} alt="" />
      <h4 className="my-3">{name}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <div key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ))}
      </div>
      <p className="mb-5">${price}</p>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <p className="text-xs text-gray-500">FREE Delivery</p>
        </div>
      )}

      <button onClick={addItemToCart} className="mt-auto button">
        <img
          loading="lazy"
          src="https://i.ibb.co/m0Xkjdd/addtocart.png"
          alt=""
        ></img>
      </button>
    </div>
  );
}

export default ProductView;
