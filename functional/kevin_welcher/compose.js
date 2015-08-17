var  _ = require('lodash');

function addSalutation(x) {
	return 'G day, ' + x;
}

function addTitle(x) {
	return 'Mr. ' + x;
}

var meetAndGreet = _.compose(addSalutation, addTitle);

addSalutation(addTitle('Baggans'));

console.log(meetAndGreet('Baggans'));