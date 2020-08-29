const routes = require("express").Router();
const user = require("./user");
const character = require("./character");

routes.use("/user", user);
routes.use("/character", character);

module.exports = routes;
