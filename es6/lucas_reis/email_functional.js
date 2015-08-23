// ES6 functional style

var getAdminEmails = users =>
	users
	.filter(u => u.role === 'admin')
	.map(u => u.email);