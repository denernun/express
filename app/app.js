'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');
app.use(cors);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routes = require('../routes/routes');
app.use(routes);

module.exports = app;
