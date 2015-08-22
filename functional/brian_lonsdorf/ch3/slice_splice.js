var xs = [1, 2, 3, 4, 5];

// pure

console.log('pure');

console.log(xs.slice(0, 3));
//=> [1, 2, 3] 

console.log(xs.slice(0, 3));
//=> [1, 2, 3] 

console.log(xs.slice(0, 3));
//=> [1, 2, 3] 

// impure

console.log('impure');

console.log(xs.splice(0, 3));
//=> [1, 2, 3] 

console.log(xs.splice(0, 3));
//=> [4,5] 

console.log(xs.splice(0, 3));
//=> [0]