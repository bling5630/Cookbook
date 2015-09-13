var _ = require('lodash'),
	R = require('ramda');

var print_a = console.log.bind(console, 'a');

function timed(workload, N, interval) {
	var counter = 0;
	var intervalId = setInterval(function() {
		workload();
		counter += 1;
		if (counter >= N) {
			clearInterval(intervalId);
			console.log('done printing', N, 'times');
		}
	}, interval);
}

timed(print_a, 5, 1000);

/*
a
a
a
a
a
done printing a 5 times
*/