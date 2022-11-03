const db = require("./db");
const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const Order_Product = require("./models/Order_Product");

User.hasMany(Order);
Order.belongsTo(User);
Product.belongsToMany(Order, { through: Order_Product });
Order.belongsToMany(Product, { through: Order_Product });

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Order_Product,
  },
};
