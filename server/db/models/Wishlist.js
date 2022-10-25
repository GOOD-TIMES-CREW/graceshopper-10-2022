const Sequelize = require("sequelize");
const db = require("../db");

const Wishlist = db.define("wishlist", {
  productId: {},
});

module.exports = Wishlist;
//test
