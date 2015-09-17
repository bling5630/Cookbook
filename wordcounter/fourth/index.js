var R = require('ramda'),
	ljs = require('lambdajs').expose(global);

var BASE_DATA = require('./data');

var sliceTheFirstThree = R.slice(0, 3);

var sortWordsByQuantity = R.sortBy(R.prop('quantity'));

var transformDataToJSON = R.pipe(R.toPairs, R.map(R.zipObj(["name", "quantity"])));

var calculatWordseByFrequency = R.countBy(R.identity);

var wordsLegnthGreaterThankSix = R.gt(6),
	wordsLengthLessThanThree = R.lt(3);

var filterWordsByLength = R.filter(R.where({
	length: R.both(wordsLegnthGreaterThankSix, wordsLegnthGreaterThankSix)
}));

var splitTheContent = R.split(' ');

var replaceMixedLetters = R.replace(/[^a-zA-Z ]/g, "");

var replaceTheUnneededCharacters = R.replace(/\s+/g, " ");

var doLowerCaseTheText = R.toLower;

var stringTheText = R.toString;


var result = compose(
	//sliceTheFirstThree,
	sortWordsByQuantity,
	transformDataToJSON,
	calculatWordseByFrequency,
	filterWordsByLength,
	splitTheContent,
	replaceMixedLetters,
	replaceTheUnneededCharacters,
	doLowerCaseTheText,
	stringTheText
);

console.log((result(BASE_DATA)));