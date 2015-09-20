// Original
// Function determines is background light enough to show dark logo.
var isLightBackground = function(color) {
	// 765 - max distance
	return xcolor.distance(color, 'white') < (765 / 2);
};
// The task is to add some logs to see what are results getting returned