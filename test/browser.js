var mainWorker = new Worker("main-worker.js");
mainWorker.postMessage("start");
mainWorker.addEventListener("message",function (e) {
  if (e.data === "success"){
    document.getElementById("output").innerText += "Success!";
  }
})
