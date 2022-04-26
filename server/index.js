const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const cors = require("cors");

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`user connected ${socket.id}`);

  socket.on("send message", (data) => {
    socket.broadcast.emit("received message", data);
    console.log(data.message, "<<< LINE 22 SERVER");
  });
});

server.listen(3001, () => {
  console.log("server is running!");
});
