var kacsa = require('./key.txt');
var vilmos = require('./value.txt');

var myArr = [1, 2, 'alma', 'korte'];

for (var i = 0; i < myArr.length; ++i) {
	console.log(myArr[i]);
}

var myObj = {};

myObj.word = kacsa;
myObj.quantity = vilmos;

var json = JSON.stringify(myObj, null, 2);
console.log(json);

var key = kacsa;
var value = vilmos;

var json = "{ ";
for (var i = 0; i < key.length; i++) {
	(i + 1) == key.length ? json += "\"" + key[i] + "\" : \"" + value[i] + "\"" : json += "\"" + key[i] + "\" : \"" + value[i] + "\",";
}
json += " }";
//var obj = json.evalJSON(true);
console.log(json);