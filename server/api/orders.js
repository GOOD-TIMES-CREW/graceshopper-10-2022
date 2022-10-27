const router = require("express").Router();
const {
  models: { Order, Order_Product },
} = require("../db");

router.get("/user/:userId", async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: {
        userId: req.params.userId,
      },
      // Error:EagerLoadingError [SequelizeEagerLoadingError]: order_product is not associated to order! Could not grab products
      // include: Order_Product,
    });
    res.json(order);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
