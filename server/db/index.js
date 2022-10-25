//this is the access point for all things database related!

const db = require("./db");
const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const OrderProducts = require("./models/OrderProducts");
// const Address = require('./models/Address')
const Wishlist = require("./models/Wishlist");

User.hasMany(Product);
Product.belongsToMany(User);

Order.hasMany(Product);
Product.belongsToMany(Order);

Wishlist.belongsTo(User);
Product.belongsToMany(Wishlist);
Order.belongsTo(User);
// User.hasOne(Address)

//have to add associations with Address, Cart, Wishlist below

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    OrderProducts,
    Address,
    Wishlist,
  },
};
