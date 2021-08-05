import express from "express";
import validateParams from "../utils";

const routes = express.Router();
routes.get("/", (req, res) => {
  res.send("Main API page");
});

routes.get("/process-image", validateParams, (req, res) => {
  return res.send("All params are correct");
});

export default routes;
