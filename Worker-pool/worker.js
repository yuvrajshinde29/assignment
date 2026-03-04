const { parentPort } = require("worker_threads");

parentPort.on('message', (msg)=>{
  const result = msg * 2;
  if(result == 4) {throw new Error("Worker error");}
  setTimeout(()=>{
    parentPort.postMessage(result)
  },1000)

})