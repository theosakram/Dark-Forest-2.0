const { Inventory, User, Character } = require("../models");
const { compare } = require("../helper/bcrypt");
const { createToken } = require("../helper/jwt");
const { Sequelize } = require("sequelize");

class UserController {
  static async getInventory(req, res, next) {
    const { id } = req.params;
    try {
      const inven = await Inventory.findAll({
        where: { user_id: id },
        include: [{ model: Character }],
      });
      res.status(200).json(inven);
    } catch (err) {
      next(err);
    }
  }

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

  static async gacha(req, res, next) {
    const { id } = req.data;
    try {
      const randomizer = Math.ceil(Math.random() * 100);
      const grade = randomizer > 97.5 ? "SSR" : randomizer > 75 ? "SR" : "R";
      const chara = await Character.findOne({
        where: { grade },
        order: [Sequelize.fn("RANDOM")],
      });
      await Inventory.create({ user_id: id, chara_id: chara.id });
      res.status(200).json(chara);
    } catch (err) {
      next(err);
    }
  }

  static async gacha10(req, res, next) {
    const { id } = req.data;
    try {
      const charaSSR = await Character.findAll({ where: { grade: "SSR" } });
      const charaSR = await Character.findAll({ where: { grade: "SR" } });
      const charaR = await Character.findAll({ where: { grade: "R" } });
      const grade = ["SSR", "SR", "R"];
      const charaArr = Array.from({ length: 10 }, (x, y) =>
        Math.ceil(Math.random() * 100) > 97.5
          ? 0
          : Math.ceil(Math.random() * 100) > 75
          ? 1
          : 2
      )
        .map((x) => grade[x])
        .map((x) =>
          x === "SSR"
            ? charaSSR[Math.floor(Math.random() * charaSSR.length)]
            : x === "SR"
            ? charaSR[Math.floor(Math.random() * charaSR.length)]
            : charaR[Math.floor(Math.random() * charaR.length)]
        );
      res.status(200).json(charaArr);
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
