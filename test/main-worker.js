importScripts("../subworkers.js");
var subWorker = new Worker("child-worker.js");
subWorker.addEventListener('message',function(e){
  if (e.data === "pong"){
    self.postMessage("success");
  }
});

self.addEventListener('message',function(e){
  if (e.data === "start"){
    subWorker.postMessage("ping");
  }
});
