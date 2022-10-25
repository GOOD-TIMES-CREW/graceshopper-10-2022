//this is the access point for all things database related!

const db = require("./db");
const User = require("./models/User");
const Product = require("./models/Product");

//Many-to-Many (Products and User)
//A user can have many product, Product belongs to many users
User.belongsToMany(Product, { through: "UserProducts" });
Product.belongsToMany(User, { through: "UserProducts" });

//test

//have to add associations with Address, Cart, Wishlist below

module.exports = {
  db,
  models: {
    User,
    Product,
  },
};
