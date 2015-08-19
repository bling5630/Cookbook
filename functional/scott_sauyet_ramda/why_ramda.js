var _ = require('lodash'),
	R = require('ramda');

// Example #1
// Plain JavaScript way

var incompleteTasks = tasks.filter(function(task) {
	return !task.complete;
});

// Lo-Dash way

var incompleteTasks = _.filter(tasks, {
	complete: false
});

// Ramda way

var incomplete = R.filter(R.where({
	complete: false
}));

// Example #2
// We could simply create a new function

var activeByUser = R.compose(groupByUser, incomplete);

// Code above looks like this if created by hand

var activeByUser = function(tasks) {
	return groupByUser(incomplete(tasks));
};

// Example #3

// Step #1

var sortUserTasks = R.compose(R.map(R.sortBy(R.prop('dueDate'))),
	activeByUser);

// Step #2

var sortUserTasks = R.compose(
	R.mapObj(R.sortBy(R.prop('dueDate'))),
	groupByUser,
	R.filter(R.where({
		complete: false
	})));

// Step #3

var sortByDate = R.sortBy(R.prop('dueDate'));
var sortUserTasks = R.compose(R.mapObj(sortByDate), activeByUser);

// Step #4

var sortByDateDescend = R.compose(R.reverse, sortByDate);
var sortUserTasks = R.compose(R.mapObj(sortByDateDescend), activeByUser);

// Dataflow

/*
incomplete: [Task] -> [Task]
sortByDate: [Task] -> [Task]
sortByDateDescend: [Task] -> [Task]
activeByUser: [Task] -> {String: [Task]}
sortUserTasks: {String: [Task]} -> {String: [Task]}
*/

// Example #4

// Step #1

var groupByUser = R.partition(R.prop('username'));

// Step #2

var topFiveUserTasks = R.compose(R.mapObj(R.take(5)), sortUserTasks);

// Step #3

var importantFields = R.project(['title', 'dueDate']);
var topDataAllUsers = R.compose(R.mapObj(importantFields), topFiveUserTasks);

// Step #4

var incomplete = R.filter(R.where({
	complete: false
}));
var sortByDate = R.sortBy(R.prop('dueDate'));
var sortByDateDescend = R.compose(R.reverse, sortByDate);
var importantFields = R.project(['title', 'dueDate']);
var groupByUser = R.partition(R.prop('username'));
var activeByUser = R.compose(groupByUser, incomplete);
var topDataAllUsers = R.compose(R.mapObj(R.compose(importantFields,
	R.take(5), sortByDateDescend)), activeByUser);

// Step #5

var results = topDataAllUsers(tasks);

// Step #6

var incompleteTasks = incomplete(tasks);

// Example #5

// Step #1

var gloss = R.compose(importantFields, R.take(5), sortByDateDescend);
var topData = R.compose(gloss, incomplete);
var topDataAllUsers = R.compose(R.mapObj(gloss), activeByUser);
var byUser = R.use(R.filter).over(R.propEq("username"));

// Step #2

var results = topData(byUser('Scott', tasks));

// Step #3

var incomplete = R.filter(R.where({complete: false}));

// Step #4

var incompleteTasks = R.filter(R.where({complete: false}), tasks);

// Step #5







