// you can create a function by passing the
// Function constructor a string of code
var func_multiply = new Function("arg1", "arg2", "return arg1 * arg2;");
console.log(func_multiply(5,10)); // 50

// define our function with the callback argument
function some_function(arg1, arg2, callback) {
  // this generates a random number between
  // arg1 and arg2
  var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2 / arg1 * 4);
  var my_script = arg1*arg1*Math.random();
  // then we're done, so we'll call the callback and
  // pass our result
  callback(my_number);
  callback(my_script);
}
// call the function
some_function(5, 15, function(num) {
  // this anonymous function will run when the
  // callback is called
  console.log("callback called! " + num);
});
