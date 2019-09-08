const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 80;

const chatRooms = new Map();

// these need to be adapted to work for different chatrooms
io.on("connection", (socket) => {
  socket.on('join', (chatRoomId) => {
    const room = chatRooms.get(chatRoomId);
    room.addUser(client);
  });

  socket.on('typing', () => {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  socket.on('message', (data) => {
    socket.broadcast.emit('message', {
      username: socket.username,
      message: data
    });
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit('user left', {
      username: socket.username,
      numUsers: numUsers
    })
  });

  socket.on('error', () => {
    console.log(err);
  });
});

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});