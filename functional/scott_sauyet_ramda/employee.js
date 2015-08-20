var _ = require('lodash'),
	R = require('ramda');

// Data set

var employees = [{
	name: 'abby',
	title: 'web dev',
	salary: 100000
}, {
	name: 'bob',
	title: 'graphics designer',
	salary: 92000
}, {
	name: 'carol',
	title: 'database admin',
	salary: 120000
}, {
	name: 'dave',
	title: 'web dev',
	salary: 95000
}, {
	name: 'edie',
	title: 'systems enginerr',
	salary: 125000
}, {
	name: 'faith',
	title: 'graphic designer',
	salary: 96000
}, {
	name: 'greg',
	title: 'systems engineer',
	salary: 122000
}, {
	name: 'hannah',
	title: 'intern',
	salary: 45000
}];

var projects = [{
	codename: 'atlas',
	due: '2013-09-30',
	budget: 300000,
	completed: '2013-10-15',
	cost: 325000
}, {
	codename: 'rhea',
	due: '2013-08-31',
	budget: 225000,
	completed: '2013-07-15',
	cost: 186000
}, {
	codename: 'chronus',
	due: '2013-06-30',
	budget: 290000,
	completed: '2013-08-15',
	cost: 250000
}, {
	codename: 'helios',
	due: '2013-05-31',
	budget: 200000,
	completed: '2013-05-15',
	cost: 220000
}, {
	codename: 'metis',
	due: '2013-02-28',
	budget: 345000,
	completed: '2013-01-29',
	cost: 300000
}];

var assignments = [{
	codename: 'atlas',
	name: 'abby'
}, {
	codename: 'atlas',
	name: 'carol'
}, {
	codename: 'atlas',
	name: 'greg'
}, {
	codename: 'atlas',
	name: 'faith'
}, {
	codename: 'chronus',
	name: 'dave'
}, {
	codename: 'chronus',
	name: 'carol'
}, {
	codename: 'chronus',
	name: 'edie'
}, {
	codename: 'chronus',
	name: 'hannah'
}, {
	codename: 'helios',
	name: 'faith'
}, {
	codename: 'helios',
	name: 'greg'
}, {
	codename: 'helios',
	name: 'hannah'
}, {
	codename: 'metis',
	name: 'bob'
}, {
	codename: 'metis',
	name: 'carol'
}, {
	codename: 'metis',
	name: 'dave'
}, {
	codename: 'metis',
	name: 'edie'
}, {
	codename: 'metis',
	name: 'hannah'
}, {
	codename: 'rhea',
	name: 'abby'
}, {
	codename: 'rhea',
	name: 'bob'
}, {
	codename: 'rhea',
	name: 'carol'
}, {
	codename: 'rhea',
	name: 'edie'
}];



var employeesByProjectName = R.pipe(R.propEq('codename'), R.flip(R.filter)(assignments), R.map(R.prop('name')));

var onTime = R.filter(function(proj) {
	return proj.completed <= proj.due;
});
var withinBudget = R.filter(function(proj) {
	return proj.cost <= proj.budget;
});
var topProjects = R.converge(R.intersection, onTime, withinBudget);
var bonusEligible = R.pipe(topProjects, R.map(R.prop('codename')), R.map(employeesByProjectName), R.flatten, R.uniq);

console.log(bonusEligible(projects()));

// Live version at http://jsbin.com/nekoxi/1/edit?js,console