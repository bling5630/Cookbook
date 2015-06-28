var averageSalary = _.compose(average, employeeSalaries);

function pluckWhere(field, list, conditions){
  var filtered = _.filter(list, and(conditions));
  return _.pluck(filtered, field);
}

var employeeSalaries = _.partial(pluckWhere, 'salary');