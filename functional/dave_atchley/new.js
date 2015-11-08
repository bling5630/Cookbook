function Person(name, age) {
   this.name = name;
   this.age = age;
}

function _new(/* constructor, param, ... */) {
  var  args = [].slice.call(arguments),
       constructor = args.shift(),
       context = Object.create(constructor.prototype),
       res;

  res = constructor.apply(context, args);
  return (typeof res === 'object' && res !== null) ? res : context;
}
var actor = _new(Person, "David Tennant", 44);


console.log(actor);
