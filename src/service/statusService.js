const { ToDoList } = require('../../models');

const updateStatus = async ({status, id}) => {
    await ToDoList.update({status}, {where: {id}});
};

module.exports = {updateStatus};