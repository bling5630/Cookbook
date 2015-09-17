var http = require("http");

var server = http.createServer();

function handaleRequest(req, res){
	res.writeHead(200, {"content-type": "text/plain"});
	res.wrcite("Hello World!");
	res.end();
}

server.on("request", handleRequest);

server.listen(8080);