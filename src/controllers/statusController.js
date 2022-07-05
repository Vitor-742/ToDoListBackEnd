const express = require('express');
const statusRouter = express.Router();

const statusService = require('../service/statusService');

statusRouter.put('/', async(req, res) => {
    const response = await statusService.updateStatus(req.body);
    if(response) res.status(response.status).json(response.json);
    res.status(204).end();
});

module.exports = statusRouter;