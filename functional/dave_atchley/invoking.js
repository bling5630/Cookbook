var foo(){ /* do foo */ }   // declaration
foo();   // invoke

(function baz() {           // IIFE
   console.log("baz!");
})();
// "baz!"

var bar = function(){ /* do bar */ };  // expression
bar();   // invoke
