// const listModels = require('../models/listModels');
const { ToDoList } = require('../../models');

const getAll = async() => {
    const allItems = await ToDoList.findAll({
        attributes: ['id', 'item', 'status']
      });
    return {status: 200, json: allItems};
};

const createItem = async ({item}) => {
    const createdItem = await ToDoList.create({item, status: 'pendente'});
    return {status: 201, json: createdItem};
};

module.exports = {
    getAll,
    createItem
};