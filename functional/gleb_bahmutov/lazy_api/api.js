function timed(workload, isDone, interval) {
	var intervalId = setInterval(function() {
		workload();
		if (isDone()) {
			clearInterval(intervalId);
			console.log('done executing workload');
		}
	}, interval);
}

function nTimes(N) {
	var counter = 0;
	return function() {
		counter += 1;
		return counter >= N;
	};
}
// timed and nTimes functions as before
// public function without any input checks
function timedPrint(character, N, interval) {
	var print = console.log.bind(console, character);
	var isDone = nTimes(N);
	timed(print, isDone, interval);
};
// defend public function from the invalid inputs
require('lazy-ass');
var check = require('check-more-types');
module.exports = check.defend(timedPrint,
	check.unemptyString, 'need character / string to print',
	check.positiveNumber, 'number of times to print should be positive',
	check.positiveNumber, 'invalid timer interval');