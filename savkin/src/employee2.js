var _ = require('lodash');

function averageSalary(employees, salaryCondition, departmentCondition) {
	var total = 0;
	var count = 0;

	_.forEach(employees, function(e) {
		if (salaryCondition(e) && (departmentCondition === undefined || departmentCondition(e))) {
			total += e.salary;
			count += 1;
		}
	});
	return (count === 0) ? 0 : total / count;
}