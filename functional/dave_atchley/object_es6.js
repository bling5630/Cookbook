// babel object_es6.js | node

let age = 44;
let obj = {
  name: "David Tennant",
  // short for, who: function(){...}
  who() { console.log("the doctor"); },
  // short for age: age
  age,
  // computed property names!
  ["hello_" + (() => "sweetie")()]: "the wife"
};

obj.who();                       // "the doctor"
console.log(obj.hello_sweetie);  // "the wife"
