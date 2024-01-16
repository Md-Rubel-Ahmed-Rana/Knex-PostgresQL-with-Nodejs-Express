const { userControllers } = require("../controller/user.controller");

const router = require("express").Router();

router.get("/", userControllers.getAll);

router.post("/create", userControllers.create);

router.patch("/update/:id", userControllers.update);

router.delete("/delete/:id", userControllers.deleteUser);

router.get("/single/:id", userControllers.getUser);

module.exports = {
  userRoutes: router,
};
