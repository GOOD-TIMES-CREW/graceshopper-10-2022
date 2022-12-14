const Sequelize = require("sequelize");
const db = require("../db");

const Order_Product = db.define("order_product", {
  orderPrice: {
    type: Sequelize.INTEGER,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
});

module.exports = Order_Product;
