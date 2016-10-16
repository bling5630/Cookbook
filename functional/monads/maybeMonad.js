function Just(value) {
    this.value = value;
}

Just.prototype.bind = function(transform) {
    return transform(this.value);
};

Just.prototype.toString = function() {
    return 'Just(' +  this.value + ')';
};
//And Nothing represents an empty value.


var Nothing = {
    bind: function() {
        return this;
    },
    toString: function() {
        return 'Nothing';
    }
};

var result = new Just(5).bind(value =>
                 new Just(6).bind(value2 =>
                      new Just(value + value2)));

console.log(result);

var result_2 = new Just(5).bind(value =>
                 Nothing.bind(value2 =>
                      new Just(value + alert(value2))));

console.log(result_2);

var result_3 = 5 + 6 * NaN;
console.log(result_3);

function getUser() {
    return new Just({
        getAvatar: function() {
            return Nothing; // no avatar
        }
    });
}

var url = getUser()
    .bind(user => user.getAvatar())
    .bind(avatar => avatar.url);

if (url instanceof Just) {
    console.log('URL has value: ' + url.value);
} else {
    console.log('URL is empty.');
}
