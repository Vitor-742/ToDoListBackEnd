'use strict';
module.exports = {
  up: async(queryInterface, Sequelize) => {
    const ToDoListTable = await queryInterface.createTable('ToDoLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });

    return ToDoListTable; 
  },
  down: async(queryInterface, /* Sequelize */) => {
    await queryInterface.dropTable('ToDoLists');
  }
};
