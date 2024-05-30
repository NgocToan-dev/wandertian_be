import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import searchController from "./searchController.js";
import blogController from "./blogController.js";

const businessApp = express();


const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

businessApp.use(cors(corsOptions));

businessApp.use("/search", searchController);
businessApp.use("/blog", blogController);

businessApp.use(bodyParser.json());
businessApp.use(bodyParser.urlencoded({ extended: false }));
businessApp.use(logger("dev"));



export default businessApp;
