const multiply = function ( x, y, z ) {
	return x * y * z;
};

const curry = function ( fn ) {
  return function ( x ) {
    return function ( y ) {
      return function ( z ) {
        return fn( x, y, z );
      };
    };
  };
};

const partApply = function ( fn, x ) {
  return function ( y, z ) {
    return fn( x, y, z );
  };
};

const curriedMultiply = curry( multiply );
const partiallyAppliedMultiply = partApply( multiply, 10 );

console.log(curriedMultiply( 10 )( 5 )( 2 )); // 100
console.log(partiallyAppliedMultiply( 5, 2 )); // 100
