var _ = require('lodash');

function and(predicates) {
  return function(e) {
    return _.every(predicates, function(p) {
      return p(e);
    });
  };
}

function average(nums) {
  var total = _.reduce(nums, function(a, b) {
    return a + b;
  }, 0);
  return (nums.length === 0) ? 0 : total / nums.length;
}

function employeerSalaries(employees, conditions) {
  var filtered = _.filter(employees, and(conditions));
  var salaries = _.pluck(filtered, 'salary');
}

function averageSalary(employees, conditions) {


  return average(employeerSalaries(employees, conditions));
}

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

function Department(employees) {
  this.works = function(employee) {
    return _.contains(employees, employee);
  };
}

module.exports = averageSalary;