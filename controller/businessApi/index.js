import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import searchController from "./searchController.js";

const businessApp = express();
const BUSINESS_PORT = 6969;


const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

businessApp.use(cors(corsOptions));


businessApp.use("/search", searchController);

businessApp.use(bodyParser.json());
businessApp.use(bodyParser.urlencoded({ extended: false }));
businessApp.use(logger("dev"));

businessApp.listen(BUSINESS_PORT, () => {
  console.log("Server is running on port 6969");
});
