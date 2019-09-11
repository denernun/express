'use strict';

exports.routes = (socket) => {
  socket.on('click', click => {
    socket.emit('click', { 'server send click accept': click });
    socket.broadcast.emit('click', { 'server send click broadcast': click });
  });
};
