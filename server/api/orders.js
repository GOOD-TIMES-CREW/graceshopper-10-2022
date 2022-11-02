const router = require("express").Router();
const {
  models: { Order },
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
    const singleOrder = await Order.findByPk(req.params.id);
    if (singleOrder) {
      res.json(singleOrder);
    } else {
      res.sendStatus(404);
    }
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
    });
    res.json(order);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
