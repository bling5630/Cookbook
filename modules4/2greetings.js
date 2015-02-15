// greetings.js
// var exports = module.exports = {};

exports.sayHelloInEnglish = function() {
	return "HELLO";
};

exports.sayHelloInSpanish = function() {
	return "Hola";
};

exports.sayHelloInFrench = function() {
	return "Bonjour Madame!!!";
};


/* 
 * this line of code re-assigns
 * module.exports
 */
module.exports = "Bonjour";