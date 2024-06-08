import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import userController from "./userController.js";

const systemApp = express();


systemApp.use(bodyParser.json());
systemApp.use(bodyParser.urlencoded({ extended: false }));

systemApp.use(cors());

systemApp.use("/user", userController);

systemApp.use(logger("dev"));



export default systemApp;
