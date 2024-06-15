import express from "express";
import UserService from "../../service/userService.js";

const router = express.Router();

router.post("/checkLogin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const userService = new UserService();
  const result = await userService.checkLogin(email, password);
  res.send(result);
});

router.post("/signUp", async (req, res) => {
  const user = req.body;
  const userService = new UserService();
  const result = await userService.signUp(user);
  res.send(result);
});

export default router;
