var _ = require('lodash');

function averageSalary(employees, minSalary, department) {
  var total = 0;
  var count = 0;

  _.each(employees, function(e) {
    if (minSalary < e.salary && (department === undefined || department.works(e))) {
      total += e.salary;
      count += 1;
    }
  });
  return (count === 0) ? 0 : total / count;
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