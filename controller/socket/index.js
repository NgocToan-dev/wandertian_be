import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  // options
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", (msg) => {
    const cache_version = Date.now();
    io.emit("message", cache_version);
  });
});
io.on("disconnect", (socket) => {
  console.log("a user disconnected");
});

export default httpServer;
