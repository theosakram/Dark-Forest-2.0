const { Inventory } = require("../models");

async function author(req, res, next) {
  let { id } = req.params;
  try {
    const inven = await Inventory.findByPk(id);
    if (!inven) throw { status: 400, msg: "Inventory not found" };
    else if (inven.user_id === req.data.id) next();
    else throw { status: 403, msg: "Unauthorized" };
  } catch (err) {
    next(err);
  }
}

module.exports = author;
