​
var generalLastName = "Clinton";​​
function getInput(options, callback) {
	allUserData.push(options);​ // Pass the global variable generalLastName to the callback function​
	callback(generalLastName, options);
}