var _ = require('underscore');

var movies = [{
		title: "Mad Max: Fury Road",
		ratings: [8.9, 9.9, 7.9],
		year: 2015
	}, {
		title: "Tomorrowland",
		ratings: [6.0, 7.0, 8.0],
		year: 2015
	}, {
		title: "Jurassic World",
		ratings: [7.2, 8.2, 9.2],
		year: 2015
	}, {
		title: "Inception",
		ratings: [7.5, 7.5, 8.5],
		year: 2010
	}

];

var sum = function(numbers) {
	return _.reduce(numbers, function(sum, n) {
		return sum + n;
	}, 0);
};

var average = function(numbers) {
	return sum(numbers) / numbers.length;
};

var isRecommended = function(movie) {
	return average(movie.ratings) >= 8;
};

var result = _.chain(movies)
	.filter(isRecommended)
	.pluck('ratings')
	.flatten()
	.min()
	.value();

console.log(result); // -> 7.2