var doctor = {
  name: 'Matt Smith',
  who: function named() {
   console.log(this.name);
  }
};

function after(fn, context) {
  var orig = context ? fn.bind(context) : fn;
  return function() {
    var args = [].slice.call(arguments);
    return orig.apply(null, args);
  };
}

var tenth = { name: 'David Tennant' };
var thedoctor = after(doctor.who, tenth);
doctor.who();  // Matt Smith
thedoctor();   // David Tennant 
