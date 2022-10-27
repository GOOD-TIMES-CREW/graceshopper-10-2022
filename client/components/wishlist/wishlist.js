// o: please remove unused code
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchWishlist } from "../../features/wishlistSlice";

// function Wishlist() {
//   const dispatch = useDispatch();
//   const { id } = useParams();

//   const wishlist = useSelector((state) => state.wishlist);

//   useEffect(() => {
//     dispatch(fetchWishlist(id));
//   }, [dispatch]);

//   return (
//     <div>
//       {wishlist?.map(({ id, image, name }) => {
//         return (
//           <div key={id}>
//             <img src={image} />
//             <h1>{name}</h1>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Wishlist;
