

var actor = {
  name:'Tamas Puski',
  age: 44
};
 console.log(actor);


// constructor function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var next_actor = new Person('Gabor Kovacs', 23);

console.log(next_actor);


var obj = { a: 42 };
console.log("%o", Object.getOwnPropertyDescriptor(obj, 'a'));
