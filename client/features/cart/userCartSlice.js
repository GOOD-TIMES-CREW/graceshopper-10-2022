import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//initial state
// const initialState = {
//   cartItems: [],
//   cartTotalQuantity: 0,
//   cartTotalAmount: 0,
// };

const TOKEN = "token";
export const fetchCartAsync = createAsyncThunk("cart/get", async (userId) => {
  const { data } = await axios.get(`/api/carts/user/${userId}`);
  console.log(data);
  return data;
});
//add items to user's cart based on userID
export const addToUserCart = createAsyncThunk(
  "cart/add",
  async ({ cartProduct, userId }) => {
    const token = window.localStorage.getItem(TOKEN);
    try {
      if (token) {
        const res = await axios.get(`api/carts/${userId}`, {
          headers: {
            authorization: token,
          },
        });

        if (res) {
          console.log("res:", res);

          if (res) {
            console.log("res:", res);

            const { data } = await axios.post(`api/carts/${userId}`, {
              headers: {
                authorization: token,
              },
              cartProduct,
              userId,
            });
            return data;
          }
        }
      }
    } catch (err) {
      console.error("adding to cart failed", err.message);
    }
  }
);

export const getTotalAsync = createAsyncThunk("cart/get", async (id) => {});

const cartForUserSlice = createSlice({
  name: "cartForUser",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToUserCart.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(fetchCartAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default cartForUserSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   cartProducts: localStorage.getItem("cartProducts")
//     ? JSON.parse(localStorage.getItem("cartProducts"))
//     : [],
//   cartTotalPrice: 0,
//   cartTotalQuantity: 0,
// };

// export const getUserCart = createAsyncThunk(
//   "userCart/get",
//   async ({ userId }) => {
//     try {
//       const { data } = await axios.get(`api/users/${userId}/cart`);
//       return data;
//     } catch (err) {
//       console.error(err.message);
//     }
//   }
// );
// export const addToUserCart = createAsyncThunk(
//   "userCart/add",
//   async ({ productId, userId, totalQuantity }) => {
//     try {
//       const { data } = await axios.put(`api/users/${userId}/cart`, {
//         data: {
//           productId,
//           totalQuantity,
//         },
//       });
//       return data;
//     } catch (err) {
//       console.error(err.message);
//     }
//   }
// );

// export const removeFromUserCart = createAsyncThunk(
//   "userCart/remove",
//   async ({ productId, userId, quantityRemoved, totalQuantity }) => {
//     const { data } = await axios.delete(`/api/users/${userId}/cart`, {
//       data: {
//         productId,
//         quantityRemoved,
//         totalQuantity,
//       },
//     });
//     return data;
//   }
// );

// const userCartSlice = createSlice({
//   name: "userCart",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addToUserCart.fulfilled, (state, action) => {
//         const productIndex = state.cartProducts.findIndex(
//           (product) => product.id === action.payload.id
//         );
//         if (productIndex >= 0) {
//           state.cartProducts[productIndex].cartQuantity++;
//         } else {
//           const newProduct = { ...action.payload, cartQuantity: 1 };
//           state.cartProducts.push(newProduct);
//         }
//         console.log(state);
//       })
//       .addCase(removeFromUserCart.fulfilled, (state, action) => {
//         const productIndex = state.cartProducts.findIndex(
//           (product) => product.id === action.payload.id
//         );
//         if (productIndex >= 0) {
//           state.cartProducts[productIndex].cartQuantity--;
//         } else {
//           state.cartProducts.splice(productIndex, 1);
//         }
//       })
//       .addCase(getUserCart.fulfilled, (state, action) => {
//         state.userCart = action.payload;
//       });
//   },
// });

// export default userCartSlice.reducer;
