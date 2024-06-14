import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "morgan";
import blogController from "./blogController.js";
import categoryController from "./categoryController.js";
import tagController from "./tagController.js";
import commentController from "./commentController.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import enumeration from "../../common/enum.js";

const businessApp = express();

businessApp.use(bodyParser.json({ limit: "10mb" }));
businessApp.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

businessApp.use(cors());

businessApp.use("/blog", blogController);
businessApp.use("/category", categoryController);
businessApp.use("/tag", tagController);
businessApp.use("/comment", commentController);

businessApp.use(logger("dev"));

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "JSONPlaceholder",
      url: "https://jsonplaceholder.typicode.com",
    },
  },
  servers: [
    {
      url: enumeration.httpConfig.business,
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: [
    "./controller/business/blogController.js",
    "./controller/business/categoryController.js",
    "./controller/business/tagController.js",
  ],
};

const swaggerSpec = swaggerJSDoc(options);

businessApp.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default businessApp;
