var averageSalary = require('../src/employee.js'),
	Employee = require('../src/employee.js'),
	Department = require('../src/employee.js');

describe("averageSalary", function() {

	var empls = [
		new Employee('Jim', 100),
		new Employee('John', 200),
		new Employee("Liz", 120),
		new Employee('Penny', 30)
	];

	var sales = new Department([empls[0], empls[1]]);

	it('calculates the avrage salary', function() {
		expect(averageSalary(empls, 50, sales)).toEqual(150);
		expect(averageSalary(empls, 50)).toEqual(140);
		expect(averageSalary(empls, function(e) {
			return e.salary > 50;
		}, sales.works)).toEqual(150);
	});
});