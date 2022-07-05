const express = require('express');
const listRouter = express.Router();

const listService = require('../service/listService');

listRouter.get('/', async (_req, res) => {
    const response = await listService.getAll();
    res.status(response.status).json(response.json);
});

listRouter.post('/', async (req, res) => {
    const response = await listService.createItem(req.body);
    res.status(response.status).json(response.json);
});

listRouter.delete('/', async (req, res) => {
    const response = await listService.deleteItem(req.body);
    if(response) res.status(response.status).json(response.json);
    res.status(204).end();
});

listRouter.put('/', async (req, res) => {
    const response = await listService.updateItem(req.body);
    res.status(response.status).json(response.json);
});

module.exports = listRouter;