var _ = require('lodash');

var orders = [{
	amount: 250
}, {
	amount: 400
}, {
	amount: 100
}, {
	amount: 325
}, ];

var mini_amount = function(sum, order) {
	console.log('Hello', sum, order);
	return sum + order.amount;
};

var totalAmount = _.reduce(orders, mini_amount, 0);

console.log(totalAmount);

/*
// normal for loop
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
	totalAmount += orders[i].amount;
}
*/