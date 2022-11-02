const router = require("express").Router();
const Cart = require("../db/models/Cart");
const Product = require("../db/models/Product");
const User = require("../db/models/User");

// GET /api/users/:id/cart
router.get("/:id/cart", async (req, res, next) => {
  try {
    const cart = await Cart.findOrCreate({
      where: {
        userId: req.params.id,
      },
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// POST /users/:id/cart
router.post("/:id/cart", async (req, res, next) => {
  try {
    const cart = await Cart.create({
      where: {
        userId: req.params.id,
      },
    });

    res.status(201).json(cart);
  } catch (err) {
    next(err);
  }
});

// PUT /users/:id/cart
router.put("/:id/cart", async (req, res, next) => {
  try {
    const cart = await Cart.findOrCreate({
      where: {
        userId: req.params.id,
      },
    });
    cart.setProduct(req.body);
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
