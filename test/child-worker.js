self.addEventListener('message',function(e){
  if (e.data === "ping"){
    self.postMessage("pong");
  }
});
