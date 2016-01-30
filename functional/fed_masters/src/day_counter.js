function daysInMonth(y, m) {
  var start = new Date(y, m -1, 1),
        end = new Date(y, m, 1);
  return (end - start)/(1000*60*60*24);
}

console.log(daysInMonth(2016, 1));
console.log(daysInMonth(2016, 2));
console.log(daysInMonth(2016, 3));
console.log(daysInMonth(2016, 4));
