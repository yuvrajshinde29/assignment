const mongoose = require("mongoose");
let mongoURL;
if (process.env.NODE_ENV === "test") {
  mongoURL = process.env.MONGO_URL_TEST;
} else {
  mongoURL = process.env.MONGO_URL;
}
const connectToDatabase = async () => {
  mongoose
    .connect(mongoURL)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((error) => {
      console.log(
        `Error While Connecting Database\n${err}\nRetry Database Connection after 5000ms\n`,
      );
      setTimeout(connectToDatabase, 5000);
    });
};

module.exports = connectToDatabase;
