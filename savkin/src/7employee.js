var _ = require('lodash');

function and(predicates) {
  return function(e) {
    return _.every(predicates, function(p) {
      return p(e);
    });
  };
}

function averageSalary(employees, conditions) {

  var filtered = _.filter(employees, and(conditions));
  var salaries = _.pluck(filtered, 'salary');

  var total = _.reduce(salaries, function(a, b) {
    return a + b;
  });
  return (salaries.length === 0) ? 0 : total / salaries.length;
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