// push mutates arrays.
const arrayOne = [1, 2, 3];
arrayOne.push( 4 );

console.log( arrayOne ); // [1, 2, 3, 4]

// concat creates a new array and leaves the original unchanged.
const arrayTwo = [1, 2, 3];
const arrayThree = arrayTwo.concat([ 4 ]);

console.log( arrayTwo ); // [1, 2, 3]
console.log( arrayThree ); // [1, 2, 3, 4]
