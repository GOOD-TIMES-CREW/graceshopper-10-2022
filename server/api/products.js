const router = require("express").Router();
const {
  models: { Product, User },
} = require("../db");

// GET /api/products
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// GET /api/products/:id
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

// POST /api/products
router.post("/", async (req, res, next) => {
  try {
    const loggedInUser = await User.findByToken(req.headers.authorization);
    if (loggedInUser.isAdmin) {
      const product = await Product.create(req.body);
      if (product) {
        res.json(product);
      } else {
        res.sendStatus(404);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    next(error);
  }
});

// DELETE /api/products/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const loggedInUser = await User.findByToken(req.headers.authorization);
    if (loggedInUser.isAdmin) {
      const product = await Product.findByPk(req.params.id);
      await product.destroy();
      res.send(product);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
