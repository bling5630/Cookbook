function capitalize(s) {
	return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

var fruitsOfTheWorld = [
	["apple", "pineapple", "pear"],
	["manzana", "pera", "piña"],
	["poma", "perera", "ananàs"]
];


var results = [];

while (i--) {
	result.unshift([]);
	var j = fruitsOfTheWorld[i].length;
	while (j--) {
		results[0].unshift(capitalize(fruitsOfTheWorld[i][j]));
	}
}

return result;

return fruitsOfTheWorld.map(function(fruits) {
	return fruits.map(capitalize);
});