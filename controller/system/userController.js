import express from "express";
import UserService from "../../service/userService.js";

const router = express.Router();

router.post("/checkLogin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userService = new UserService();
  const result = await userService.checkLogin(username, password);
  res.send(result);
});

export default router;
