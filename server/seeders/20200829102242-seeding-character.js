"use strict";
const fs = require("fs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let parsedChara = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

    for (let i = 0; i < parsedChara.length; i++) {
      parsedChara[i].createdAt = new Date();
      parsedChara[i].updatedAt = new Date();
    }

    await queryInterface.bulkInsert("Characters", parsedChara, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Characters", null, {});
  },
};
