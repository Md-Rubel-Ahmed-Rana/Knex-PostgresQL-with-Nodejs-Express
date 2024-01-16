const { postRoutes } = require("./post.routes");
const { userRoutes } = require("./user.routes");
const router = require("express").Router();

router.use("/users", userRoutes);
router.use("/posts", postRoutes);

export const rootRoutes = router;
