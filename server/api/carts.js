const router = require("express").Router();
const Order = require("../db/models/Order");
const Product = require("../db/models/Product");
const User = require("../db/models/User");
const Order_Product = require("../db/models/Order_Product");

// GET /api/users/:id/cart
router.get("/:id/cart", async (req, res, next) => {
  try {
    // console.log(req.params.id);
    const [order] = await Order.findOrCreate({
      where: {
        userId: req.params.id,
      },
      defaults: {
        userId: req.params.id,
      },
    });
    const orderProducts = await Order_Product.findAll({
      where: {
        orderId: order.id,
      },
    });
    res.json(orderProducts);
  } catch (err) {
    next(err);
  }
});

// POST /users/:id/cart
router.post("/:id/cart", async (req, res, next) => {
  try {
    const [order] = await Order.create({
      where: {
        userId: req.params.id,
      },
    });

    res.status(201).json(order);
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
    const orderProduct = await Order_Product.findOrCreate({
      where: {
        orderId: order.id,
        productId: req.body.data.productId,
      },
      defaults: {
        orderId: order.id,
        productId: req.body.data.productId,
        quantity: 1,
      },
    });
    console.log(req.body.data.totalQuantity, orderProduct);
    if (orderProduct.quantity >= 1) {
      orderProduct.update({
        quantity: req.body.data.totalQuantity++,
      });
    }
    res.json(orderProduct);
  } catch (err) {
    next(err);
  }
});

// DELETE /users/:id/cart
router.delete("/:id/cart", async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.params.id,
      },
    });
    const orderProduct = await Order_Product.findOne({
      where: {
        orderId: order.id,
        productId: req.body.productId,
      },
    });
    if (req.body.quantityRemoved < req.body.totalQuantity) {
      orderProduct.update({
        quantity: req.body.totalQuantity - req.body.quantityRemoved,
      });
    } else {
      await orderProduct.destroy();
    }
    res.send(orderProduct);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
