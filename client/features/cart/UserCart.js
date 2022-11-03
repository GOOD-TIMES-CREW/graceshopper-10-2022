import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartAsync } from "./userCartSlice";

function UserCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartForUser);
  const userId = useSelector((state) => state.auth.me.id);
  useEffect(() => {
    dispatch(fetchCartAsync(userId));
  }, [dispatch]);
  let userItems = cart.filter((currentItem) => {
    if (currentItem.userId === userId) {
      return currentItem;
    }
  });
  const cartPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price;
    });
    return totalPrice;
  };
  return (
    <div>
      <h1>Items</h1>
      {userItems.map((currentItem) => (
        <div key={currentItem.id}>
          <img src={currentItem.imageUrl} />
          <div>
            <h3>{currentItem.name}</h3>
          </div>
          <div>${currentItem.price}</div>
        </div>
      ))}
      <h2>Total: ${cartPrice()}</h2>
    </div>
  );
}

export default UserCart;
