var greet = (function() {
   var greeting = "Hello!";
   return function(name) {
      console.log(greeting + ", " + name + "!");
   };
})();
greet("Cap'n Tight Pants");
// => "Hello, Cap'n Tight Pants!"
