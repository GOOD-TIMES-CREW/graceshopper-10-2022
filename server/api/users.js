const router = require("express").Router();
const {
  models: { User },
} = require("../db");

// GET  /api/users
router.get("/", async (req, res, next) => {
  try {
    // const loggedInUser = await User.findByToken(req.headers.authorization);
    // if (loggedInUser.isAdmin) {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // attributes: ["id", "username"],
    });
    res.json(users);
    // }
    // else {
    //   res.sendStatus(401);
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
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

// DELETE /api/users/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.send(user);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

// PUT /api/users/:id
router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(await user.update(req.body));
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
