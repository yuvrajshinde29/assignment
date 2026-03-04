const { parentPort } = require('worker_threads');

parentPort.on('message', (msg)=>{
  let arr = [];
  for(let i=msg.s; i <= msg.e; i++){
    arr.push(i)
  }
  parentPort.postMessage(arr);
  if(msg?.close === 'true')
    parentPort.close()
})