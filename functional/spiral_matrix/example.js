import _ from 'ramda';

var convert = (n) => {return _.flatten(n);};

console.log(convert([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]));
