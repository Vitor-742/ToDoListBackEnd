const express = require('express');
const statusRouter = express.Router();

const statusService = require('../service/statusService');

statusRouter.put('/', async(req, res) => {
    await statusService.updateStatus(req.body);
    res.status(204).end();
});

module.exports = statusRouter;