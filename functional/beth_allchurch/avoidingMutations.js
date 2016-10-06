/*
const objectOne = { valueOne : 1 };
const objectTwo = { valueTwo : 2 };

const objectThree = Object.assign( {}, objectOne, objectTwo );

console.log( objectThree ); // { valueOne : 1, valueTwo : 2 }
*/

const x = 1;
x = 2; // not allowed

const myArray = [1, 2, 3];
var myArray_0 = [0, 2, 3]; // not allowed

myArray[0] = 0; // allowed!


console.log(myArray);
console.log(myArray_0);
