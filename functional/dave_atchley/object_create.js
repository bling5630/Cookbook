// creates a new, empty object linked to Object.prototype
var obj = Object.create({});

// create a new, empty object not linked to Object.prototype
obj = Object.create(null);

var person_proto = {
      name: "", age: null
    },
    descriptor = {
      tardis: { value: "blue box" }
    };

// creates a new object based on person_proto
var actor = Object.create(person_proto, descriptor);
actor.name = "David Tennant";
actor.age = 44;
// actor:
//   name: "David Tennant"
//   age: 44
//   tardis: "blue box"

console.log(person_proto);
console.log(actor);
