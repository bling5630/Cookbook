var _ = require('ramda');

var id = _.prop('id', {id:'foo'});

console.log(id);

var data = [{id:'foo'}, {id:'bar'}, {id:'alma'}, {id:'majom'}];

var ids = data.map(_.prop('id'));

console.log(ids);
