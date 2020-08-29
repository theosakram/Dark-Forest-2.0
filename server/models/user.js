"use strict";
const { Model } = require("sequelize");
const { hash } = require("../helper/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Inventory, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Email is already in use",
        },
        validate: {
          isEmail: {
            args: true,
            msg: "Invalid email format",
          },
          notEmpty: {
            args: true,
            msg: "Email is not allowed to be empty",
          },
          notNull: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "You need password for your account",
          },
          notNull: true,
        },
      },
    },
    {
      sequelize,
      hooks: {
        beforeCreate: (user) => {
          user.password = hash(user.password);
        },
      },
      modelName: "User",
    }
  );
  return User;
};
