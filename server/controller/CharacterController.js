const { Character } = require("../models");

class CharacterController {
  static async get(req, res, next) {
    try {
      const chara = await Character.findAll();
      res.status(200).json(chara);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    const { id } = req.params;
    try {
      const chara = await Character.findByPk(id);
      res.status(200).json(chara);
    } catch (err) {
      next(err);
    }
  }

  static async getByJob(req, res, next) {
    const { job } = req.params;
    try {
      const chara = await Character.findAll({ where: { job } });
      res.status(200).json(chara);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CharacterController;
