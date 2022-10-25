const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define("cart", {
  productId: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Cart;
