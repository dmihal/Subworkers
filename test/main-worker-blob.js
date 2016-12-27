importScripts("../subworkers.js");

var childWorkerStr = '';
childWorkerStr += "self.addEventListener('message',function(e){";
childWorkerStr += "  if (e.data === 'ping'){";
childWorkerStr += "    self.postMessage('pong');";
childWorkerStr += "  }";
childWorkerStr += "});";

var childfWorkerURL = URL.createObjectURL(
  new Blob([ childWorkerStr ], {type: 'text/javascript'})
);

var subWorker = new Worker(childfWorkerURL);
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
