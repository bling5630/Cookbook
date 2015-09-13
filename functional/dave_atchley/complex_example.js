var _ = require('ramda');

var records = [{
	id: 1,
	name: 'Dave',
	age: 40,
	active: true
}, {
	id: 2,
	name: 'Kurt',
	age: 43,
	active: false
}, {
	id: 3,
	name: 'Beth',
	age: 28,
	active: true
}, {
	id: 4,
	name: 'Angie',
	age: 39,
	active: true
}, {
	id: 5,
	name: 'Adam',
	age: 34,
	active: false
}];


var filterBy = _.curry(function(fn, list) {
	return list.filter(fn);
});
var isActive = filterBy(function(o) {
	return o.active === true;
});
var isUnder40 = filterBy(function(o) {
	return o.age < 40;
});

var mapWith = _.curry(function(fn, list) {
	return list.map(fn);
});

var getProp = _.curry(function(prop, obj) {
	return obj[prop];
});

var getNames = mapWith(getProp('name'));

function compose() {
	var args = [].slice.call(arguments),
		fn = args.shift(),
		gn = args.shift(),
		fog = gn ? function() {
			return fn(gn.apply(this, arguments));
		} : fn;

	return args.length ? compose.apply(this, [fog].concat(args)) : fog;
}

var getActiveUnder40 = compose(getNames, isActive, isUnder40);


console.log(getActiveUnder40(records));
// ['Beth', 'Angie']