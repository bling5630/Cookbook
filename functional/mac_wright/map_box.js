var _ = require('ramda');

/*
Problem: given a list of layers from a Mapbox GL Style Spec
style,find groups of more than one layer that have a
specific set of properties in common.*/

// solution

var refProps = ['type', 'source', 'source-layer',
  'minzoom', 'maxzoom', 'filter', 'layout'];

// takes a layer object, returns a stripped-down version
var pickRequired = _.pick(refProps);

// compose creates a function like JSON.stringify(pickRequired(layer))
var getRefHash = _.compose(JSON.stringify.bind(JSON), pickRequired);

var candidates = _.values(_.groupBy(getRefHash, layers))
  // this is like function(l) { return l.length > 1 }, except point-free
  .filter(_.compose(_.lt(1), _.length))
  // turn a list of objects into a list of their id properties
  .map(_.pluck('id'));


console.log(candidates);
