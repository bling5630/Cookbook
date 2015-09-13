var _ = require('lodash'),
	R = require('ramda');

function timedPrint(workload, N, interval) {
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

timedPrint(function print() { // 1
	console.log('a');
}, 5, 1000);

/*
a
a
a
a
a
done printing a 5 times
*/