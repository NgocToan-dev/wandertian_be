import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import enumeration from "../../common/enum.js";
const SOCKET_PORT = 1111;
const domain = enumeration.cors_domain.wandertian_fe;
const app = express()
const httpServer = createServer(app);
const io = new Server(httpServer, {
  // options
  cors: {
    origin: domain,
    methods: ["GET", "POST"],
    credentials: true,
  },
});
const sockets = new Set();
io.on("connection", (socket) => {
  sockets.add(socket)
  io.on("disconnect", (socket) => {
    console.log("a user disconnected");
    sockets.delete(socket);
  });
});


httpServer.listen(SOCKET_PORT, () => {
  console.log(
    `SOCKET Server is running on port http://localhost:${SOCKET_PORT}`
  );
});
export default io;
