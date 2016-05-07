var http  = require('http');
var stats = require('measured').createCollection();

http.createServer(function(req, res) {
  stats.meter('requestsPerSecond').mark();
  res.end('Thanks');
}).listen(3000);

setInterval(function() {
  console.log(stats.toJSON());
}, 1000);
