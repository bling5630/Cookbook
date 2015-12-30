var greetDeeplyCurried = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};

var greetAwkwardly = greetDeeplyCurried('Hello')('...')('?');


greetAwkwardly('John'); //'Hello...John?'
greetAwkwardly('Eddie'); //'Hello...Eddie?'

var sayHello = greetDeeplyCurried('Hello')(', ');

sayHello('.')('Michael'); //'Hello, Michael.'
sayHello('.')('Darren'); //'Hello, Darren.'

var askHello = sayHello('?');

askHello('Carmelo'); //'Hello, Carmelo?'
askHello('Lebron'); //'Hello, Lebron?'
