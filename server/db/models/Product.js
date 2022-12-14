const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://i.ibb.co/QdVQvYF/hermione-jpg.webp",
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  system: {
    type: Sequelize.STRING,
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Product;
