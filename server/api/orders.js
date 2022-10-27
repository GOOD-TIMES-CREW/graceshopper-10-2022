const router = require("express").Router();
const { default: axios } = require("axios");
const {
  models: { Order, Order_Product },
} = require("../db");

// GET api/orders/
router.get("/", async (req, res, next) => {
  try {
    const allOrders = await Order.findAll();
    res.json(allOrders);
  } catch (error) {
    next(error);
  }
});

// GET api/orders/:id
router.get("/:id", async (req, res, next) => {
  try {
    // o: make sure to catch the scenario where orders are not found
    const singleOrder = await Order.findByPk(req.params.id);
    res.json(singleOrder);
  } catch (error) {
    next(error);
  }
});

// /api/orders/user/:userId
router.get("/user/:userId", async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: {
        userId: req.params.userId,
      },
      // o: please remove unused code
      // Error:EagerLoadingError [SequelizeEagerLoadingError]: order_product is not associated to order! Could not grab products
      // include: Order_Product,
    });
    res.json(order);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
