var _ = require('lodash'),
	R = require('ramda');

function timed(workload, isDone, interval) {
	var intervalId = setInterval(function() {
		workload();
		if (isDone()) {
			clearInterval(intervalId);
			console.log('done executing workload');
		}
	}, interval);
}

var print_a = console.log.bind(console, 'a');

function nTimes(N) {
	var counter = 0;
	return function() {
		counter += 1;
		return counter >= N;
	};
}

timed(print_a, nTimes(5), 1000);

/*
a
a
a
a
a
done printing a 5 times
*/