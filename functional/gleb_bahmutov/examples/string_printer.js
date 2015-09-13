var _ = require('lodash'),
	R = require('ramda');

function timedPrint(character, N, interval) {
	var counter = 0; // counting
	var intervalId = setInterval(function() { // time
		console.log(character); // printing
		counter += 1; // counting
		if (counter >= N) { // counting
			clearInterval(intervalId); // time
			console.log('done printing', character, N, 'times');
		}
	}, interval); // time
}

timedPrint('a', 3, 1000);

/*
a
a
a
done printing a 3 times
*/