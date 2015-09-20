var R = require('ramda');
var log = R.curry(function(tag, val) {
	console.log(tag, val);
	return val;
});
var distanceFromWhiteColor = R.flip(x.color.distance)('white');
var isLightDistance = R.lt(765 / 2);

var isLightBackground = R.compose(log("result:"), isLighterDistance, log("distance:"), distanceFromWhiteColor, log("color:"));