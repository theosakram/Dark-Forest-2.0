const routes = require("express").Router();
const { CharacterController } = require("../controller");

routes.get("/", CharacterController.get);
routes.get("/:id", CharacterController.getById);
routes.get("/job/:job", CharacterController.getByJob);

module.exports = routes;
