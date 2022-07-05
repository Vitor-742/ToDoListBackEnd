const { ToDoList } = require('../../models');
const { needId, needItem } = require('../utils/returnMessage');

const getAll = async() => {
    const allItems = await ToDoList.findAll();
    return {status: 200, json: allItems};
};

const createItem = async ({item}) => {
    if(!item) return needItem;
    const createdItem = await ToDoList.create({item, status: 'pendente'});
    return {status: 201, json: createdItem};
};

const deleteItem = async ({id}) => {
    if(!id) return needId;
    await ToDoList.destroy({
        where: {id}
    });
};

const updateItem = async({id, item}) => {
    if(!id) return needId;
    if(!item) return needItem;
    await ToDoList.update({item}, {where: {id}});
    return {status: 200, json: {id, item}};
};

module.exports = {
    getAll,
    createItem,
    deleteItem,
    updateItem,
};