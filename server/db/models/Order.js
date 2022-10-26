const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  userId: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status: {
    type: Sequelize.ENUM("fulfilled, unfulfilled"),
    defaultValue: "unfulfilled",
    allowNull: false,
  },
});

module.exports = Order;

