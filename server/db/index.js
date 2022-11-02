const db = require("./db");
const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
// const Cart = require("./models/Cart");
const Order_Product = require("./models/Order_Product");
//const Wishlist = require("./models/Wishlist");

User.hasMany(Order);
// User.hasOne(Cart);
Order.belongsTo(User);

Product.belongsToMany(Order, { through: Order_Product });
Order.belongsToMany(Product, { through: Order_Product });
// Cart.belongsTo(User);
// Cart.belongsToMany(Product, { through: "cart_product" });
// Product.belongsToMany(Cart, { through: "cart_product" });

// Wishlist.belongsTo(User);
// Product.belongsToMany(Wishlist);

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    // Wishlist,
  },
};
