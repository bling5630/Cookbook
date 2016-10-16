function Just(value) {
    this.value = value;
}

Just.prototype.bind = function(transform) {
    return transform(this.value);
};


var result = new Just(5).bind(value =>
                 new Just(6).bind(value2 =>
                      new Just(value + value2)));
console.log(result);

var result = doM(function*() {
    var value = yield new Just(5);
    var value2 = yield new Just(6);
    return new Just(value + value2);
}());

console.log(result);
