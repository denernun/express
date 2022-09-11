const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');

const app = express();
app.use(
  bodyParser.raw({
    type: function () {
      return true;
    },
    limit: '5mb',
  })
);

app.use('/', indexRouter);
app.use('/', express.static(__dirname + '/public'));

module.exports = app;
