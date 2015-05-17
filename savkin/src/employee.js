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

function Department(employees) {
  this.works = function(employee) {
    return _.contains(employees, employee);
  };
}

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

var empls = [
  new Employee('Jim', 100),
  new Employee('John', 200),
  new Employee('Penny', 30),
];

var sales = new Department([empls[0], empls[1]]);
var manufacturing = new Department([empls[3], empls[1]]);
var it = new Department([empls[5], empls[1]]);

console.log(empls);
console.log(averageSalary(empls, 60, manufacturing));
console.log(averageSalary(empls, 60, it));
console.log(averageSalary(empls, 60, sales));


module.exports = averageSalary;