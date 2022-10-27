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
  // o: let's chat about this during our Sprint Meeting
  genre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // o: I am assuiming this is inventory quantity?
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

//fixed
module.exports = Product;
