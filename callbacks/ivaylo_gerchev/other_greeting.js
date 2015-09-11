function fullName(firstName, lastName, callback) {
	console.log("My name is " + firstName + " " + lastName);
	callback(lastName);
}

fullName("Jackie", "Chan", function(ln) {
	console.log('Welcome Mr. ' + ln);
});