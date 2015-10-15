var a = 4;
function foo(x) {
   var a = x;  // shadows parent 'a' declaration
   console.log(a);
}
console.log(foo(6));   // => 6
console.log(a);        // => 4

var a = 4;
function foo(x) {
   a = x;    // woops!
   console.log(a);
}
console.log(foo(6));   // => 6
console.log(a);        // => 6 
