var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text'});
    res.end('<h1>Hello guys!</h1>');
});

var port = Number(process.env.PORT || 5000);

server.listen(port);
