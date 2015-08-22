// Portable / Self-Documenting

// impure

var signUp = function(attrs) {
	var user = saveUser(attrs);
	welcomeUser(user);
};

// pure

var signUpPure = function(Db, Email, attrs) {
	return function() {
		var user = saveUser(Db, attrs);
		welcomeUser(Email, user);
	};
};