const routes = require("express").Router();
const { authentication } = require("../middleware");
const { UserController } = require("../controller");

routes.use(authentication);
routes.get("/", UserController.get);
routes.get("/:id", UserController.getById);

routes.post("/login", UserController.login);
routes.post("/register", UserController.register);

routes.put("/:id", UserController.editProfile);

routes.delete("/:id", UserController.deleteAccount);

module.exports = routes;
