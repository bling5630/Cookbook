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

var ids = records.map(function(rec) {
	return rec.id;
});

var getProp = _.curry(function(prop, obj) {
	return obj[prop];
});

var new_ids = records.map(getProp('id'));

console.log(new_ids);

var mapWith = _.curry(function(fn, list) {
	return list.map(fn);
});

var getNames = mapWith(getProp('name'));

var names = getNames(records);

console.log(names);