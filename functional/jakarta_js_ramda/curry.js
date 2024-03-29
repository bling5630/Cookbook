function hello(message, fn) {
  "use strict";
  return function(name) {
    return fn(message + " " + name);
  };
}

let yourName = hello("Good evening", console.log);

// Invoke directly
hello("Good evening", console.log)("Asep");

// Reusing the function
yourName("Asep");
yourName("Bagja");
yourName("Priandana");
