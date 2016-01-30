// secret input: time

function daysThisMonth() {
  var date = new Date(),
      y = date.getFullYear(),
      m = date.getMonth(),
      start = new Date(y, m , 1),
      end = new Date(y, m , 1);
      return (end - start)/(1000*60*60*24);
}

// always works the same
/*
function daysInMonth(y, m) {
  var start = new Date(y, m -1, 1),
        end = new Date(y, m, 1);
  return (end - start)/(1000*60*60*24);
}

console.log(daysInMonth(2016, 1));
console.log(daysInMonth(2016, 2));
console.log(daysInMonth(2016, 3));
console.log(daysInMonth(2016, 4));
*/

console.log(daysThisMonth(1929, 10-1, 24));
//console.log(daysThisMonth(2016, 10-1, 24));
