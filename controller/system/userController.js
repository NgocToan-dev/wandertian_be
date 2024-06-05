import express from "express";
import UserService from "../../service/userService.js";

const router = express.Router();

router.post("/checkLogin", (req, res) => {
  const { username, password } = req.body;
  const userService = new UserService();
  const result = userService.checkLogin(username, password);
  res.send(result);
});

export default router;
