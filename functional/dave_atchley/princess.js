let princess = {
   name: 'Leia Organa',
   say: function(msg) { console.log(this.name + ": " + msg); }
};
princess.say("I love you!");
// => Leia Organa: I love you!
