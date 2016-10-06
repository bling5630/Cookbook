const multiply = function ( x, y ) {
  return x * y;
};

const curry = function ( fn ) {
  return function ( x ) {
    return function ( y ) {
      return fn( x, y );
    };
  };
};

const curriedMultiply = curry( multiply );

const double = curriedMultiply( 2 );
const triple = curriedMultiply( 3 );
const quadruple = curriedMultiply( 4 );

console.log(triple( 6 )); // 18
