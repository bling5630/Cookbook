var curryIt = function(uncurried) {
  var parameters = Array.prototype.slice.call(arguments, 1);
  return function() {
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};

var greeter = function(greeting, separator, emphasis, name) {
  console.log(greeting + separator + name + emphasis);
};

var greetHello = curryIt(greeter, 'Hello', ', ', '.');

greetHello('Malcom'); //'Hello, Malcolm.'
greetHello('Edgard'); //'Hello, Edgard.'

var greetGoodbye = curryIt(greeter, 'Goodby', ', ');
greetGoodbye('.', 'Joe'); //'Goodbye, Joe.'
