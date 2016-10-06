// The function addThenSquare is made by combining the functions add and square.
/*
const add = function ( x, y ) {
  return x + y;
};

const square = function ( x ) {
  return x * x;
};

const addThenSquare = function ( x, y ) {
  return square(add( x, y ));
};

console.log(add(1,2));
console.log(square(9));
console.log(addThenSquare(10,4));

const add = function ( x, y ) {
  return x + y;
};

const square = function ( x ) {
  return x * x;
};

const composeTwo = function ( f, g ) {
  return function ( x, y ) {
    return g( f ( x, y ) );
  };
};

const addThenSquare = composeTwo( add, square );

console.log(addThenSquare(1,2));
*/

// This version of composeTwo can accept any number of arguments for the initial function.
const composeTwo = function ( f, g ) {
  return function ( ...args ) {
    return g( f( ...args ) );
  };
};

// composeMany can accept any number of functions as well as any number of arguments for the
// initial function.
const composeMany = function ( ...args ) {
  const funcs = args;
  return function ( ...args ) {
    funcs.forEach(( func ) => {
      args = [func.apply( this, args )];
    });
    return args[0];
  };
};
