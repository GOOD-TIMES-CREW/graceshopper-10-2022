const db = require("./db");
const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const Cart = require("./models/Cart");
const Order_Product = require("./models/Order_Product");
const CartProducts = require("./models/CartProducts");

User.hasMany(Order);
User.hasOne(Cart);
Cart.belongsTo(User);
Order.belongsTo(User);

Product.belongsToMany(Order, { through: Order_Product });
Order.belongsToMany(Product, { through: Order_Product });

Cart.belongsToMany(Product, { through: CartProducts });
Product.belongsToMany(Cart, { through: CartProducts });

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Order_Product,
    Cart,
    CartProducts,
  },
};
