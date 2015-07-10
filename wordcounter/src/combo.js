var _ = require('lodash');

function filterByLength(content) {
	return _.filter(content.split(' '), function(n) {
		return n.length > 2 && n.length < 8;
	});
}

var x = ('abc bvosbdo ohvo expert alma korte pcnapvpfvpdsfpvdp kacsa zyk');

var y = ('a b c d e f g h i joga ') 
console.log(filterByLength(y + x));

module.exports = filterByLength;