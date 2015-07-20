/**
*We are exporting user directly, 
*without any indirection
*/

var user = function(name, email, location) {
	this.name = "Tamas";
	this.email = "tm@gmail.com";
	this.location = "Budapest";
};

module.exports = user;