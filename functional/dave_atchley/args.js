function args(a,b) {
  console.log('a,b: ', a,b);
  console.log('all: ', arguments);
}

console.log(args(1,2));   // a,b: 1 2
                        // all: [1,2]
console.log(args(1,2,3,4)); // a,b: 1 2
                          // all: [1,2,3,4]
