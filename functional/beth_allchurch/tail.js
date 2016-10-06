const factorial = function ( n, base ) {
  if ( n === 0 ) {
    return base;
  }
  base *= n;
  return factorial( n - 1, base );
};

console.log(factorial( 10, 1 )); // 3628800
