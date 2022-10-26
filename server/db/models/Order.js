const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  status: {
    type: Sequelize.ENUM("fulfilled", "unfulfilled"),
    defaultValue: "unfulfilled",
  },
  shipped: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  confirmationNumber: {
    type: Sequelize.STRING,
  },
  shipping_address: {
    type: Sequelize.TEXT,
  },
  dateOrdered: {
    type: Sequelize.DATE,
  },
});

module.exports = Order;

// the through table automatically generates the foreign keys for product and user, so we do not need to define here

//fixed
