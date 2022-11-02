const router = require("express").Router();
const Order = require("../db/models/Order");
const Product = require("../db/models/Product");
const User = require("../db/models/User");
const Order_Product = require("../db/models/Order_Product");

// GET /api/users/:id/cart
router.get("/:id/cart", async (req, res, next) => {
  try {
    // console.log(req.params.id);
    const cart = await Order.findOrCreate({
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
    const cart = await Order.create({
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
    const [order] = await Order.findOrCreate({
      where: {
        userId: req.params.id,
      },
    });
    console.log("req.body: ", req.body);
    const orderProduct = await Order_Product.create({
      orderId: order.id,
      productId: req.body.productId,
    });
    res.json(orderProduct);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
