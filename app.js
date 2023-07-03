const express = require('express');
const bodyParser = require('body-parser');
const rootRouter = require('./routes/root');
const statusRouter = require('./routes/status');

const app = express();
app.use(
  bodyParser.raw({
    type: function () {
      return true;
    },
    limit: '5mb',
  })
);

app.use('/', rootRouter);
app.use('/status', statusRouter);
app.use('/app', express.static(__dirname + '/public'));

module.exports = app;
