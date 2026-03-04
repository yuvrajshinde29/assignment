const { Worker } = require("worker_threads");
class WorkerPool {
  constructor(size, workerFile) {
    this.idealWorkers = [];
    this.taskQueue = [];
    for (let i = 0; i < size; i++) {
      const worker = this.createWorker(workerFile);
      this.idealWorkers.push(worker);
    }
  }
  // schedule task
  async runTask(data) {
    return new Promise((resolve, reject) => {
      this.taskQueue.push({ data, resolve, reject });
      this.next();
    });
  }
  // run task
  next() {
    if (!this.idealWorkers.length || !this.taskQueue.length) return;
    const worker = this.idealWorkers.shift();
    const task = this.taskQueue.shift();
    worker.current = task; //can pass just resolve, reject
    worker.postMessage(task.data);
  }
  //create new worker on exit
  createWorker(workerFile) {
    const worker = new Worker(workerFile);

    // add events
    worker.on("message", (msg) => {
      worker.current.resolve(msg);
      worker.current = null;
      this.idealWorkers.push(worker);
      this.next();
    });
    worker.on("error", (error) => {
      worker.current.reject(error);
      worker.current = null;
    });
    worker.on("exit", (code) => {
      if (code != 0) {
        const worker = this.createWorker(workerFile);
        this.idealWorkers.push(worker);
        this.next();
      }
    });
    return worker;
  }
}

module.exports = WorkerPool;
