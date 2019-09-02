const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 80;

app.get('/', function(req, res) {
  res.json({ message: "hi" });
})

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port);