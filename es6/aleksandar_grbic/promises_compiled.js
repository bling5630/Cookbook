// callback functions are functions - events
// promises are objects - data

// #1

'use strict';

var myPromise = function myPromise() {

	return new Promise(function (resolve, reject) {

		var number = 5;

		if (number < 4) {

			resolve('Promise was resolved');
		} else {

			reject(new Error('An error occured, Promise was rejected!'));
		}
	});
};

myPromise().then(function (resolved) {

	console.log(resolved);
})['catch'](function (rejected) {

	console.log(rejected);
});
