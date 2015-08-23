// compose style
// var compose = (f, g) => x => f(g(x));

var prop = p => x => x[p];

var map = f => list =>
	list.map(f);

// which lead to:
var getTheEmailsOf = map(prop('email'));


var propEq = v => obj =>
	prop(p)(obj) === v;

var filter = f => list =>
	list.filter(f);

// which lead to:
var onlyTheAdminRoleUsers =
	filter(propEq('admin')('rola'));

// final version is:

var getAdminEmails = compose(
	map(
		prop('email')),
	filter(
		propEq('admin')('role')));