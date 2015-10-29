import _ from 'ramda';

// map
var numbers = [1,2,3,4,5,6,7,8,9,10];
// => numbers: [1,2,3,4,5,6,7,8,9,10]

numbers.forEach((n,index) => {
  var a = numbers[index] = n + 1;
  // console.log(a);
});
// => plusone: [2,3,4,5,6,7,8,9,10,11]

var numbers2 = [1,2,3,4,5,6,7,8,9,10];
var plusone = numbers2.map((n)=> n + 1);
// console.log(plusone);
// => plusone: [2,3,4,5,6,7,8,9,10,11]

// ramda map & add

var numbers3 = [10,20,30,40,50,60,70,80,90,100];
var addOneToAll = _.map(_.add(1));
// console.log(addOneToAll(numbers3));

// filter

var evens = plusone.filter((n) => n % 2 === 0);
// console.log(evens);

// ramda

var isEven = n => n % 2 === 0;
// console.log(_.filter(isEven, numbers3) + ' these numbers are evens');

// reduce

var evens = plusone.filter((n) => n % 2 === 0);
var byfour = evens.reduce((groups, n) => {
  let key = n % 4 === 0 ? 'yes' : 'no';
  (groups[key] = groups[key] || []).push(n);
  return groups;
}, {});
// console.log(byfour);
// => byfour: { 'yes': [4,8], 'no': [2,6,10] }

//ramda
var numbers4 = [10,20,30,40,50,60,70,80,90,100];
let key2 = n=> n % 4 === 0 ? 'yes' : 'no';
let transform = _.pipe(_.toPairs,_.map(_.zipObj(['yes', 'no'])));
let transform2 = _.pipe(_.map(key2, evens));

console.log(_.map(key2, numbers4));
