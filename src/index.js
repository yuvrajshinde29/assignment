const express = require("express");
const Router = express.Router();
const fs = require("fs");
const path = require("path");

fs.readdirSync(__dirname)
  .filter((dir) => {
    if (
      dir.indexOf(".") === -1 &&
      dir.slice(-3) !== ".js" &&
      dir !== path.basename(__filename)
    )
      console.log(dir);

    return (
      dir.indexOf(".") === -1 &&
      dir.slice(-3) !== ".js" &&
      dir !== path.basename(__filename)
    );
  }) /**this will return folders inside src[user,...] */
  .forEach((dir_) => {
    fs.readdirSync(`${__dirname}/${dir_}`)
      .filter((dir__) => {
        /*  if (dir__.slice(-9) === ".route.js") {
          console.log(dir__.slice(-9), " = ", dir__);
        } */
        return dir__.slice(-9) === ".route.js";
      }) /**this will return files inside each folder [user -> user.route.js, user.controller.js,...] */
      .forEach((index) => {
        const file = index.split(".route.js")[0];
        // console.log(file);
        const miniRoute = file ? "/" + file : "/";
        // console.log(miniRoute);
        const filePath = path.join(__dirname, dir_, index);
        // console.log(filePath);
        const route = require(filePath);
        return Router.use(miniRoute, route);
      });
  });

module.exports = Router;

