import React from "react";

function Success() {
  return (
    <main className="max-w-screen-lg mx-auto">
      <div className="flex flex-col p-10 bg-white">
        <div className="flex items-center space-x-2 mb-5">
          <h1 className="text-3xl">
            Thank you, your order has been confirmed!
          </h1>
        </div>
        <p>
          Thank you for shopping with us. We'll send a confirmation once your
          item has shipped. If you would like to check the status of your
          order(s), please press the link below.
        </p>
        <button className="button mt-8 p-2 text-xs font-extrabold md:text-sm bg-gradient-to-b from-blue-200 to-pink-400 border border-blue-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 active:from-blue-500 text-white">
          Go to my orders
        </button>
      </div>
    </main>
  );
}

export default Success;
