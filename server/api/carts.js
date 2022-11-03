const router = require("express").Router();
const Order = require("../db/models/Order");
const Product = require("../db/models/Product");
const User = require("../db/models/User");
const Order_Product = require("../db/models/Order_Product");
const CartProducts = require("../db/models/CartProducts");
const Cart = require("../db/models/Cart");

// GET /api/carts
router.get("/", async (req, res, next) => {
  try {
    const allCartProducts = await CartProducts.findAll();
    res.json(allCartProducts);
  } catch (err) {
    next(err);
  }
});

// GET /api/carts/users/:id
router.get("/users/:id", async (req, res, next) => {
  try {
    const products = await CartProducts.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const cart = await Cart.findOrCreate({
      where: { userId: req.params.id },
    });

    res.status(200).json(cart);
  } catch (err) {
    next(err);
  }
});

// POST /carts/:id
router.post("/:id", async (req, res, next) => {
  const { id, price, name, imageUrl } = req.body.cartProduct;
  try {
    const cart = await Cart.findOne({
      where: {
        userId: req.body.userId,
      },
    });
    if (cart) {
      const cartProducts = await CartProducts.create({
        userId: req.body.userId,
        productId: id,
        quantity: 1,
        productName: name,
        productPrice: price,
        imageUrl: imageUrl,
      });
      res.json(cartProducts);
    }
  } catch (err) {
    next(err);
  }
});

// PUT /carts/:id
router.put("/:id", async (req, res, next) => {
  const { id } = req.body.product;
  try {
    const cartProducts = await CartProducts.findOne({
      where: {
        userId: req.body.userId,
      },
    });
    await cartProducts.update({
      where: {
        userId: req.body.userId,

        productId: id,
      },
    });
  } catch (err) {
    next(err);
  }
});

// DELETE /carts/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const item = await CartProducts.findByPk(req.params.id);
    await item.destroy();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
