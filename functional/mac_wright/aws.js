var _ = require('ramda');

/*
Problem: given an array of objects called layers,
create an object called layerMap that has the 'id'
property of a layer as a key and the layer itself
as a value.
*/

// solution

var layerMap = R.zipObj(R.pluck('id', layers), layers);

var getAWS = R.once(function() {
  return new Promise(function(resolve, reject) {
    loadScript('/bundle-aws.min.js', function(err) {
      if (err || typeof AWS === 'undefined') {
        return reject(err || new Error('An error occurred'));
      } else resolve(AWS);
    });
  });
});
