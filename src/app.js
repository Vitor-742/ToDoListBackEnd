const express = require('express');
const bodyParser = require('body-parser');
const listController = require('./controllers/listController');
const statusController = require('./controllers/statusController');

const app = express();

app.use(bodyParser.json());

app.use('/', listController);

app.use('/status', statusController);

module.exports = app;