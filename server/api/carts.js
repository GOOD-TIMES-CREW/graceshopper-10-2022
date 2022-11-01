const router = require("express").Router();
const Cart = require("../db/models/Cart");
const Product = require("../db/models/Product");
const User = require("../db/models/User");

// GET /api/users/:id/cart
router.get("/:id/cart", async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) {
      const newCart = await Cart.create({ userId: req.params.id });
      return res.status(202).json(newCart);
    } else {
      res.json(cart);
    }
  } catch (err) {
    next(err);
  }
});

// POST /users/:id/cart
router.post("/:id/cart", async (req, res, next) => {
  try {
    console.log(req.body);
    const { userId } = req.body;
    res.status(201).json(await Cart.create({ where: { userId: userId } }));
  } catch (err) {
    next(err);
  }
});

// PUT /users/:id/cart
router.put("/:id/cart", async (req, res, next) => {
  try {
    const cart = Cart.findByPk(req.params.id);
    res.json(await cart.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
