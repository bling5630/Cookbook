


var obj = {
  foo: "bar",
  baz: 42,
  print: function(s){ console.log(s); }
};

obj.foo;
obj.print("hi");


var obj = {};
obj.name = "David Tennant";
obj.age = 44;
obj["33"] = "what?";  // can only access using [] operator
obj[true] = "true";   // coercion to property named "true"

obj.33;      // syntax error!
obj["33"];   // "what?"
obj["true"]; // "true"
obj.true;    // "true"
