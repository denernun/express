'use strict';

const fs = require('fs');
const http = require('http');
const app = require('../app/app');
const socket = require('../socket/socket');

const port = normalizePort(process.env.PORT || 3005);

app.set('port', port);

// const options = {
//   key: fs.readFileSync("privkey.pem"),
//   cert: fs.readFileSync("fullchain.pem")
// };
//const server = http.createServer(options,app).listen(port);

const server = http.createServer(app).listen(port);

server.on('error', onError);
server.on('listening', onListening);

socket.initialize(server);

function normalizePort(value) {
  const port = parseInt(value, 10);

  if (isNaN(port)) {
    return value;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `pipe ${port}`
    : `port ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.log(`${bind} require elevated privileges`);
      throw error;
    case 'EADDRINUSE':
      console.log(`${bind} is already in use`);
      throw error;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;

  console.log('Server listening on', bind);
}
