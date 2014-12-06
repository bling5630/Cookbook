var x = 10;
var y = Math.floor(Math.random() * 100);

var addX = function(v) {
	return v + x - y;
};

module.exports.x = x;
module.exports.y = y;
module.exports.addX = addX;