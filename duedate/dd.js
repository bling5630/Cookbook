const dueDateCalculator = require('due-date-calculator')
 
const submitDate = new Date('2016-11-22T14:40:00')
const turnaround = 16
 
console.log(dueDateCalculator(submitDate, turnaround))
// returns 2016.11.24. 14:40 