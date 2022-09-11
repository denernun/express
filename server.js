const fs = require('fs');
const config = require('./config/config');
const app = require('./app');
const https = require('https');

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || config.get('app.port'));
app.set('port', port);

/**
 * Create HTTP server or HTTPS server
 */
const server = https.createServer(
  {
    key: fs.readFileSync(config.get('app.serverkey')),
    cert: fs.readFileSync(config.get('app.servercert')),
  },
  app
);

/**
 * Listen on provided port, on all network interfaces.
 */
function startServer() {
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
}

// Start server
startServer();

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log(`Server listening on ${bind}`);
}
