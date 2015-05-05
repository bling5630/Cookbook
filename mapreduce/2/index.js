var _ = require('lodash'),
	books = require('./books'),
	names = require('./names');

/*
// C-style
var bookCheckouts = 0;

for (var i = 0; i < books.length; i++) {
	bookCheckouts = bookCheckouts + books[i].checkouts;
}

// Lo-Dash style
_.forEach(books, function(b, i) {
	bookCheckouts = bookCheckouts + books[i].checkouts;
});
console.log(bookCheckouts);
*/

/*
// Using map and reduce
// Get an array of checkout values only
var bookCheckouts = books.map(function(item) {
	return item.checkouts;
});

// Sum the array's values from left to right
var total = bookCheckouts.reduce(function(prev, curr) {
	return prev + curr;
});

// Lo-Dash style
// Get an array of checkout values only
var bookCheckouts = _.map(books, function(item) {
	return item.checkouts;
});

// Sum the array's values from left to right
var total = _.reduce(bookCheckouts, function(prev, curr) {
	return prev + curr;
});

// Get total of book checkouts
var total = books
	.map(function(b) {
		return b.checkouts;
	}).reduce(function(p, c) {
		return p + c;
	});
console.log(total);
*/

/*
// Basic reduce examples

var total = [1, 2, 3, 4, 5].reduce(function(p, c, i) {
	console.log(p, c, i);
	return p + c;
});

var total2 = [1, 2, 3].reduce(function(p, c, i) {
	console.log(p, c, i);
	return p + c;
}, 100);

console.log(total);
console.log(total2);
*/

var namesMap = names.reduce(function(memo, curr) {
	memo[curr[0]] = curr[1];
	return memo;
}, {});

console.log(namesMap);