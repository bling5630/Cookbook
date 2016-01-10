function factorial(n, accumulator) {
  if (n===0) {
    return accumulator;
  }
  return factorial(n-1, n*accumulator);
}

console.log(factorial(5,100)); // =>12000
