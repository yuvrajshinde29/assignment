const WorkerPool = require("./workerPool");
const os = require('os')
const workerPool = new WorkerPool(os.cpus.length-1, './worker.js');

const runInThreadPool = async()=>{
  const result= await Promise.allSettled([
    workerPool.runTask(1),
    workerPool.runTask(2),
    workerPool.runTask(3),
  ])
  console.log(result)
}
runInThreadPool()