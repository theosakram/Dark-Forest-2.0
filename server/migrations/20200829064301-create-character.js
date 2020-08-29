"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Characters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
      },
      title: {
        type: Sequelize.STRING,
        unique: true,
      },
      image_url: {
        type: Sequelize.STRING,
      },
      job: {
        type: Sequelize.STRING,
      },
      grade: {
        type: Sequelize.STRING,
      },
      atk: {
        type: Sequelize.INTEGER,
      },
      def: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Characters");
  },
};
