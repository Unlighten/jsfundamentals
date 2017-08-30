//Web Workers

//A web worker is a JavaScript running in the background, without affecting the performance of the page.

var w;

function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("demo_workers.js");
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}

function stopWorker() { 
    w.terminate();
    w = undefined;
}

//This is an example of a worker.
//Remember that it is pulling from "demo.workers.js"
//What this should do with the proper html is count from increments of 1 every second. 
//It is going on in the background while other things are happening, pretty cool to see.


//Before implementing a worker, it is important to make sure that the worker will be supported.
//To check that, run:
if (typeof(Worker) !== "undefined") {
    // Yes! Web worker support!
    // Some code.....
} else {
    // Sorry! No Web Worker support..
}