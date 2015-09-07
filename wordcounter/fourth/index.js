var R = require('ramda'),
	ljs = require('lambdajs').expose(global);

var BASE_DATA = require('./data');

//var sliceTheFirstThree = R.slice(0, 3);

var sortByQuantity = R.sortBy(R.prop('quantity'));

var transformDataToJSON = R.pipe(R.toPairs, R.map(R.zipObj(["name", "quantity"])));

//console.log(transformData(input));

// step #5
var calculateByFrequency = function(xs) {
	return reduce(calculateFrequencySimple, {}, xs);
};

// step #4
var calculateFrequencySimple = function(x, y) {
	x[y] = ++x[y] || 1;
	return x;
};

var wordsGreaterThankSix = R.gt(6),
	wordsLessThanThree = R.lt(3);

var filterWordsByLength = R.filter(R.where({
	length: R.both(wordsGreaterThankSix, wordsLessThanThree)
}));

var splitTheContent = R.split(' ');

var replaceMixedLetters = R.replace(/[^a-zA-Z ]/g, "");

var replaceTheUnneededCharacters = R.replace(/\s+/g, " ");

var doLowerCaseTheText = R.toLower;

var stringTheText = R.toString;


var result = compose(
	//sliceTheFirstThree,
	//sortByQuantity,
	//transformDataToJSON,


	//calculateByFrequency,

	filterWordsByLength,
	splitTheContent,
	replaceMixedLetters,
	replaceTheUnneededCharacters,
	doLowerCaseTheText,
	stringTheText
);

console.log((result(BASE_DATA)));