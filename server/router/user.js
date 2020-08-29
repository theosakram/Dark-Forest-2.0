const routes = require("express").Router();
const { authentication } = require("../middleware");
const { UserController } = require("../controller");

routes.post("/login", UserController.login);
routes.post("/register", UserController.register);

routes.use(authentication);
routes.get("/:id", UserController.getInventory);
routes.post("/gacha", UserController.gacha);
routes.post("/gacha10", UserController.gacha10);

routes.put("/:id", UserController.editProfile);
routes.delete("/:id", UserController.deleteAccount);

module.exports = routes;
