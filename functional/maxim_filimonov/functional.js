// Functional
var log = function(tag, val) {
	console.log(tag, val);
	return val;
};

var isLightBackground = function(color) {
	// 765 - max distance
	log("color:", color);
	return log("result:", log("distance:", xcolor.distance(color, 'white')) < (765 / 2));
};