let EventSourceNpm = require('eventsource');
var sourceNative = new EventSource("http://localhost:8080/stream");
var sourceNpm = new EventSourceNpm("http://localhost:8080/stream"); 
sourceNative.onmessage = function(e) { 
	console.log("from REAL eventsource", e); 
}; 
sourceNpm.onmessage = function(e) { 
	console.log("from npm eventsource", e); 
}; 
