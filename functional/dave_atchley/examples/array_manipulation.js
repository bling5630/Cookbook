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
let BASE_COLLECTION = [1,2,3,4,5,6,7,8,9,
                      10,20,30,40,50,60,
                      70,80,90,100];
let BASE_NUMBER = 4,
    BASE_REMINDER = 0,
    BASE_GROUP_ONE = 'yes',
    BASE_GROUP_TWO = 'no';

let byNumbers = _.groupBy((number)=>{
  return number % BASE_NUMBER === BASE_REMINDER ?
   BASE_GROUP_ONE : BASE_GROUP_TWO;
});
/*
console.log(byNumbers(BASE_COLLECTION));
console.log(byNumbers(evens));
*/

// Being fluent-ish

// old way

let result =[1,2,3,4,5,6,7,8,9,10]
            .map((n)=>n*2)
            .filter((n)=> 10 % n === 0)
            .reduce((sum, n)=>(sum+=n), 0);

console.log(result + " this is the original");

// ramda way

let BASE_ARRAY =[1,2,3,4,5,6,7,8,9,10],
                BASE_MULTIPLY = _.multiply(2),
                BASE_DIVIDE = (n)=> 10 % n === 0,
                BASE_SUM = _.reduce((sum, n)=>(sum+=n), 0);


let multiplyNumbers = _.map(BASE_MULTIPLY),
    filterByNumbers = _.filter(BASE_DIVIDE),
    addNumbers = BASE_SUM;


let result_ramda = _.pipe(
            multiplyNumbers,
            filterByNumbers,
            addNumbers
);

console.log(result_ramda(BASE_ARRAY));

// array from
/*
var divs = document.querySelectorAll('div.pane');
var text = Array.from(divs, (d) => d.textContent);
console.log("div text:", text);
*/

var filled = Array.from([1,2,3], (n) => n || 0);
console.log("filled:", filled);
// => [1,0,2,0,3]

// Array.find() and Array.findIndex()

function find(list, value) {
    var index = list.indexOf(value);
    return index == -1 ? undefined : list[index];
}
var arr = ['cat','dog','bat','badger','cow'];
console.log("dog? ", find(arr, 'dog'));
// dog? dog
console.log("weasle? ", find(arr, 'weasle'));
// weasle? undefined

var found;
// Find the first item longer than 3 characters
for (var i=0; i < arr.length; i++) {
  if (arr[i].length > 3) {
    found = arr[i];
    break;
  }
}
// found: 'badger'

// ES6 way

// Array.find and Array.findIndex(fn)
var found = [1,4,-5,10].find((n) => n < 0);
console.log("found:", found);

var index = [1,4,-5,10].findIndex((n) => n < 0);
console.log("index:", index);

// found: -5
// index: 2

// The for..of loop

var arr = [3,5,7,9],
    obj = { a: 1, b: 2, c: 3 };

// ES5 for..in over objects
for (var p in obj) {
  console.log(p);
}
// a  b   c

// ES5 for..in over arrays
for (var n in arr) {
  console.log(n);
}
// 0 1 2 3

// ES6 for..of over arrays
for (let n of arr) {
  console.log(n);
}
// 3 5 7 9

// using a generator function
function* entries(obj) {
   for (let key of Object.keys(obj)) {
     yield [key, obj[key]];
   }
}


for (let [key, value] of entries(obj)) {
   console.log(key, "->", value);
}
// a -> 1
// b -> 2
// c -> 3
