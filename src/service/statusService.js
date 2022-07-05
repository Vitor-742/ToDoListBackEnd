const { ToDoList } = require('../../models');
const { needId, needStatus } = require('../utils/returnMessage');

const updateStatus = async ({status, id}) => {
    if(!status) return needStatus;
    if(!id) return needId;
    if(status !== 'em andamento'|| status !== 'pendente'|| status !== 'pronto') {
        return {status: 400, json: 'status fora do padrão'}; 
    }
    await ToDoList.update({status}, {where: {id}});
};

module.exports = {updateStatus};