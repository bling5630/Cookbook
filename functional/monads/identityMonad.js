function Identity(value) {
    this.value = value;
}

Identity.prototype.bind = function(transform) {
    return transform(this.value);
};

Identity.prototype.toString = function() {
    return 'Identity(' + this.value + ')';
};

//The example below computes addition using the Identity monad.

//Arrow functions

var result = new Identity(50).bind(value =>
                 new Identity(60).bind(value2 =>
                      new Identity(value + value2)));

console.log(result);
