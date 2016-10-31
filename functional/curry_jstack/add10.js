const add = (a) => (b) => a + b;
const add10 = add(10);

console.log( add10(2) );		// prints 12
