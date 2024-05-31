import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import blogController from "./blogController.js";
import categoryController from "./categoryController.js";

const businessApp = express();

businessApp.use(bodyParser.json());
businessApp.use(bodyParser.urlencoded({ extended: false }));

businessApp.use(cors());

businessApp.use("/blog", blogController);
businessApp.use("/category", categoryController);

businessApp.use(logger("dev"));

export default businessApp;
