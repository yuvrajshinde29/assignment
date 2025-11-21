const express = require('express')
const Router = express.Router()

Router.get("/", (req, res, next) => {
  res.send("dynamic route set.");
});


module.exports = Router