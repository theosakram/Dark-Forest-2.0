const { User } = require("../models");
const { compare } = require("../helper/bcrypt");
const { createToken } = require("../helper/jwt");

class UserController {
  static async register(req, res, next) {
    const { name, email, password } = req.body;
    try {
      const user = await User.create({ name, email, password });
      res.status(201).json({
        name: user.name,
        email: user.email,
        msg: "User registered successfully",
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    let { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (user) {
        if (compare(password, user.password)) {
          const access_token = createToken({
            id: user.id,
            email: user.email,
          });
          res.status(200).json({
            msg: "User logged in successfully",
            access_token,
            name: user.name,
            id: user.id,
          });
        } else throw { status: 400, msg: "Wrong email/ password" };
      } else throw { status: 400, msg: "User not found" };
    } catch (err) {
      next(err);
    }
  }

  static async editProfile(req, res, next) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const user = await User.findByPk(id);
      if (user) {
        await User.update({ name }, { where: { id } });
        res.status(200).json({ msg: "Name updated successfully" });
      } else throw { status: 400, msg: "User not found" };
    } catch (err) {
      next(err);
    }
  }

  static async deleteAccount(req, res, next) {
    const { id } = req.params;
    try {
      await User.destroy({ where: { id } });
      res.status(200).json({ msg: "Account deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
