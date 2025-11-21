require("dotenv").config();
const express = require("express");
const sequelize = require("./config/db_config");
const indexRoute = require("./src/index");
const app = express();

app.use("/api", indexRoute);

app.use((err,req,res,next)=>{
  res.send("i'am error handler middleware")
})

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
  console.log("server started on port: ", port);
});

/* async function connectToServer() {
  try {
    await sequelize.authenticate();
    console.log("Postgres db connected...");

    await sequelize.sync();
    console.log("Tables created...");
  } catch (error) {
    console.log(`Error : ${error.message}
        stack : ${error.stack}`);
  }
}
connectToServer(); */
