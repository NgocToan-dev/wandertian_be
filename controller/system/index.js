import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import userController from "./userController.js";

const systemApp = express();


systemApp.use(bodyParser.json());
systemApp.use(bodyParser.urlencoded({ extended: false }));

systemApp.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

systemApp.use("/user", userController);

systemApp.use(logger("dev"));



export default systemApp;
