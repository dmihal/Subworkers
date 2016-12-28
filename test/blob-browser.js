var mainWorker = new Worker("main-worker-blob.js");
mainWorker.postMessage("start");
mainWorker.addEventListener("message",function (e) {
  if (e.data === "success"){
    document.getElementById("blob-url-output").textContent = "Success!";
  }
})
