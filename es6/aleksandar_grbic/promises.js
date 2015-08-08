// callback functions are functions - events
// promises are objects - data
let Promise = require('es6-promise').Promise;
// #1
/*
let myPromise = function() {

	return new Promise(function(resolve, reject) {

		let number = 5;

		if (number > 4) {

			resolve('Promise was resolved');

		} else {

			reject(new Error('An error occured, Promise was rejected!'));

		}
	});
};

myPromise()

.then(function(resolved) {

	return 5;
	//console.log(resolved);

})

.then(function(data) {
	console.log(data);
})

.then(function(data) {
	//throw Error('Whats up');

	if (data > 6) {

		throw new Error('sds');

	} else {

		return 'is all good bro';
	}
})

// everything stops after that -> throw Error('Whats up');

.then(function(data) {
	return 'Batman';
})

.then(function(hero) {
	console.log(hero);
})

.catch(function(rejected) {

	console.log(rejected);
});


	return new Promise(function (resolve, reject) {
	           ^
ReferenceError: Promise is not defined
*/

// #2
// Promise.all, grabs multiply promises


let promiseOne = new Promise(function(resolve) {
	resolve('Frist Promise Bro');
});

let promiseTwo = new Promise(function(resolve) {
	resolve('Second Promise Bro');
});

Promise.all([promiseOne, promiseTwo])

.then(function(data) {

	// let FristPromise = data[0];
	// let [first, second] = data;

	console.log(data);
});