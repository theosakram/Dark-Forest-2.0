"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Character.hasMany(models.Inventory, { foreignKey: "chara_id" });
    }
  }
  Character.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Character name must be unique",
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "Character name cannot be empty",
          },
          notNull: true,
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Title should be unique",
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "Title cannot be empty",
          },
          notNull: true,
        },
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: {
            args: true,
            msg: "Invalid Image URL format",
          },
          notEmpty: {
            args: true,
            msg: "Image URL cannot be empty",
          },
        },
      },
      job: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Job cannot be empty",
          },
          notNull: true,
        },
      },
      grade: DataTypes.STRING,
      atk: DataTypes.INTEGER,
      def: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Character",
    }
  );
  return Character;
};
