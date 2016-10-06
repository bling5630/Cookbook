const frozenObject = Object.freeze( { valueOne : 1, valueTwo : { nestedValue : 1 } } );
var y = frozenObject.valueOne = 2; // not allowed
var x = frozenObject.valueTwo.nestedValue = 2; // allowed!

console.log(x);
console.log(y);
