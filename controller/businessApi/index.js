import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import searchController from "./searchController.js";
import blogController from "./blogController.js";

const businessApp = express();
const BUSINESS_PORT = 7000;



businessApp.use(bodyParser.json());
businessApp.use(bodyParser.urlencoded({ extended: false }));

businessApp.use(cors());

businessApp.use("/search", searchController);
businessApp.use("/blog", blogController);

businessApp.use(logger("dev"));

businessApp.listen(BUSINESS_PORT, () => {
  console.log("Server is running on port 6969");
});
