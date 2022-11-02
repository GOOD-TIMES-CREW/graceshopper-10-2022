const router = require("express").Router();
const {
  models: { User },
} = require("../db");

// GET  /api/users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({});
    res.json(users);
    // }
  } catch (err) {
    next(err);
  }
});

// POST /api/users
router.post("/", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// GET /api/users/:id
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/users/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// PUT /api/users/:id
router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(await user.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
