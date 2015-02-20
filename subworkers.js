/* Detect if we're in a worker or not */
var isWorker = false;
try {
  document;
} catch (e){
  isWorker = true;
}

if (isWorker){
  if (!self.Worker){
    self.Worker = function(path){
      this.id = Math.random().toString(36).substr(2, 5);


      var location = self.location.pathname;
      var absPath = location.substring(0, location.lastIndexOf('/')) + '/' + path;
      self.postMessage({
        _subworker: true,
        cmd: 'newWorker',
        id: this.id,
        path: absPath
      });
    };
    Worker.prototype = {
      onerror: null,
      onmessage: null,
      postMessage: function(message){

      },
      terminate: function(){

      },
      addEventListener: function(type, listener, useCapture){

      },
      removeEventListener: function(type, listener, useCapture){

      },
      dispatchEvent: function(event){

      }
    };
  }
}

var allWorkers = {};
var cmds = {
  newWorker: function(event){
    var worker = new Worker(event.data.path);
    allWorkers[event.data.id] = worker;
  }
}
var messageRecieved = function(event){
  if (event.data._subworker){
    cmds[event.data.cmd](event);
  }
};


/* Hijack Worker */
var oldWorker = Worker;
Worker = function(path){
  if (this.constructor !== Worker){
    throw new TypeError("Failed to construct 'Worker': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
  }
  var newWorker = new oldWorker(path);
  newWorker.addEventListener("message", messageRecieved);
  
  return newWorker;
};
