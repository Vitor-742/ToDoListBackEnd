const express = require('express');
const bodyParser = require('body-parser');
const listController = require('./controllers/listController');

const app = express();

app.use(bodyParser.json());

app.use('/', listController);

module.exports = app;