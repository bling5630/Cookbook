const _ = require('ramda');

const numbers = [10, 20, 30, 40, 50, 60];

var a = _.nth(3, numbers); // => 40  (0-based indexing)

var b = _.nth(-2, numbers); // => 50 (negative numbers start from the right)

var c =_.slice(2, 5, numbers); // => [30, 40, 50] (see below)

var d =_.contains(20, numbers); // => true


console.log(a, b, c, d);

var e = _.head(numbers); // => 10
var f = _.tail(numbers); // => [20, 30, 40, 50, 60]

var g = _.last(numbers); // => 60
var h = _.init(numbers); // => [10, 20, 30, 40, 50]

var i = _.take(3, numbers); // => [10, 20, 30]
var j = _.takeLast(3, numbers); // => [40, 50, 60]

var k = console.log(e,f,g,h,i,j);

var l = _.insert(3, 35, numbers); // => [10, 20, 30, 35, 40, 50, 60]

var m = _.append(70, numbers); // => [10, 20, 30, 40, 50, 60, 70]

var n = _.prepend(0, numbers); // => [0, 10, 20, 30, 40, 50, 60]

var o = _.update(1, 15, numbers); // => [10, 15, 30, 40, 50, 60]

console.log(l,m,n,o);

var p = _.concat(numbers, [70, 80, 90]); // => [10, 20, 30, 40, 50, 60, 70, 80, 90]

console.log(p);

var q = _.remove(2, 3, numbers); // => [10, 20, 60]

var r = _.without([30, 40, 50], numbers); // => [10, 20, 60]

var s = _.drop(3, numbers); // => [40, 50, 60]

var t = _.dropLast(3, numbers); // => [10, 20, 30]

console.log(q,r,s,t);

var x = _.update(2, _.multiply(10, _.nth(2, numbers)), numbers); // => [10, 20, 300, 40, 50, 60]

console.log(x);

var y = _.adjust(_.multiply(10), 2, numbers);

console.log(y);
