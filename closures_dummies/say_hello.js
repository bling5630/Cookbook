function sayHello(name) {
  var text = 'Hello ' + name;
  var sayAlert = function() {console.log(text);
  };
  sayAlert();
}

sayHello('Bob');

function sayHello2(name) {
  var text2 = 'Hello ' + name; // local variable
  var sayAlert2 = function() {console.log(text2);
  };
  return sayAlert2();
}

var say2 = sayHello2('Jane');
