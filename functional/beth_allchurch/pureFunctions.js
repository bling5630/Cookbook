// Make the global variable local.
const myFunc = function ( y ) {
  const x = 10;
  return x + y;
};

console.log(myFunc( 3 )); // 13
console.log(myFunc( 3 )); // 13
// Pass x as an argument.
const x = 10;

const myFunc_1 = function ( x, y ) {
  return x + y;
};

console.log(myFunc( x, 3 )); // 13
console.log(myFunc_1( x, 3 )); // 13
