'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

//app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const index = require('../routes/index');
app.use('/', index);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
      message: err.message,
      error: err,
    });
  });
}

if (app.get('env') !== 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
      message: err.message,
      error: {},
    });
  });
}

module.exports = app;
