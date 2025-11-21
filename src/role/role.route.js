const express = require("express");
const Router = express.Router();
const errorWrapper = require("../../utils/error");
Router.use(
  "/",
  errorWrapper((req, res, next) => {
    throw new Error("chacking error handler")
    res.send("dunamic route set for role");
  })
);

module.exports = Router;
