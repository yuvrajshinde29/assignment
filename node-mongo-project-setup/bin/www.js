require("dotenv").config();
const cluster = require("node:cluster");
const os = require("node:os");
const app = require("../app");
const connectToDatabase = require("../config/database");
const numCPUs = os.cpus().length;
const port = process.env.PORT || 3000;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
    break; //fork only one worker in test
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  console.log(`Worker ${process.pid} started`);

  connectToDatabase().then(() => {
    console.log("Database connected successfully.");

    app.set("port", port);
    app.listen(app.get("port"), () => {
      console.log(`Worker ${process.pid} is listening on port ${port}`);
    });
  });
}
