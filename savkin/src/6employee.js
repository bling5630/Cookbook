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
  var total = 0;

  _.each(filtered, function(e) {
      total += e.salary;
  });
  return (filtered.length === 0) ? 0 : total / filtered.length;
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