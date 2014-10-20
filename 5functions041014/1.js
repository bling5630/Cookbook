/*
function(console){
var names = ["Tamas", "Gabor", "Tibor"],
counter;

for(var counter = 0; counter < names.length; counter ++) {
	console.log(names[counter])
}
}*/

var names = ["Tamas", "Gabor", "Tibor"];

var name = names.forEach(function(name) {
	console.log(name);
});