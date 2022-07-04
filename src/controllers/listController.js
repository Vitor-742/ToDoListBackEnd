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

module.exports = listRouter;