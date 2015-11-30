'use strict';

 var handleSocket = function handleSocket (io) {
  var clients = {};

  io.on('connection', function (socket) {
    socket.broadcast.emit('user connected');
      var userName;
      socket.on('connection name',function(user){
          userName = user.name;
          if (user.oldName && clients[user.oldName]) {
              console.log('heere \n');

              delete clients[user.oldName];
          }
          clients[user.name] = socket;
          io.sockets.emit('new user', user.name + " has joined.");
      });

    socket.on('message', function (from, msg) {

      console.log('recieved message from', from, 'msg', JSON.stringify(msg));

      console.log('broadcasting message');
      console.log('payload is', msg);
      io.sockets.emit('broadcast', {
        payload: msg,
        source: from
      });
      console.log('broadcast complete');
    });


      socket.on('private message', function(msg){
          var fromMsg = {from:userName, txt:msg.txt};
          clients[msg.to].emit('private message', fromMsg);
      });

      socket.on('disconnect', function(){
          delete clients[userName];
      });
  });

  return clients;
};

module.exports = handleSocket;

