const routes = require("express").Router();
const { UserController } = require("../controller");

routes.get("/", UserController.get);
routes.get("/:id", UserController.getById);

routes.post("/login", UserController.login);
routes.post("/register", UserController.register);

routes.put("/:id", UserController.editProfile);

routes.delete("/:id", UserController.delete);

module.exports = routes;
