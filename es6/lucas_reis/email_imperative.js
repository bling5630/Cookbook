// imperative style

var getAdminEmails = function(users) {
	var emails = [];
	for (var i = 0; i < users.length; i++) {
		if (users[i].role === 'admin') {
			emails.push(users[i].email);
		}
	}
	return users;
};
