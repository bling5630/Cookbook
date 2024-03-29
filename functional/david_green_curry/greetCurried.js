var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ', ' + name);
  };

};

var greetHello = greetCurried('Hello');

greetHello('Heidi'); //'Hello, Heidi'
greetHello('George');//'Hello George
greetCurried('Hi there')('Howard');//'Hi there, Howard'
