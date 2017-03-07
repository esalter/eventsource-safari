var app = require('express')();
var cors = require('cors');
app.use(cors());

app.get('/stream', function(req, res) {
	req.socket.setTimeout(20000);
	res.writeHead(200, {
		'Content-Type': 'text/event-stream',
		'Cache-Control': 'no-cache',
 		'Connection': 'keep-alive'
	});
	res.write('\n');

	setInterval(function(){
		var msg = Math.random();
		res.write("data: "+ msg + "\n\n"); // <- Push a message to a single attached client
	}, 2000);
});

app.listen(8080);
