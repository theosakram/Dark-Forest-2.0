const routes = require("express").Router();
const { CharacterController } = require("../controller");

routes.get("/", CharacterController.get);
routes.get("/:id", CharacterController.getById);

module.exports = routes;
