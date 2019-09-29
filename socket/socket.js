'use strict';

exports.initialize = (server) => {
  const io = require('socket.io')(server);
  io.on('connection', socket => {
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    require('./socket-routes').routes(socket);
  });
};
