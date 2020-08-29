"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inventory.belongsTo(models.User, { foreignKey: "user_id" });
      Inventory.belongsTo(models.Character, { foreignKey: "chara_id" });
    }
  }
  Inventory.init(
    {
      user_id: DataTypes.INTEGER,
      chara_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Inventory",
    }
  );
  return Inventory;
};
