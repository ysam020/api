import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Function to configure Express app
const configureApp = () => {
  const app = express();

  // Security and parsing middleware
  app.use(bodyParser.json({ limit: "100mb" }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // CORS settings
  app.use(cors());

  return app;
};

export default configureApp;
