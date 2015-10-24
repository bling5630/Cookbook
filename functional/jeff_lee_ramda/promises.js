var _ = require('ramda');

// Bad - using typical anonymous function boilerplate
function getAnimalData() {
  return getAnimalInfoFromDatabase().then(function(response1) {
    return getRelevantInfoFrom3rdPartyAPI(response1);
  }).then(function(response2) {
    return getRelevantPhotoFromFlickrAPI(response2);
  }).then(function(response3) {
    return response3;
    // Note: This last part of the promise chain is actually unnecessary, but
    // newbies tend to include it.
  });
}

// Better - using pointfree style
function getAnimalData() {
  return getAnimalInfoFromDatabase()
    .then(getRelevantInfoFrom3rdPartyAPI)
    .then(getRelevantPhotoFromFlickrAPI);
}

// Most Radtastic - using Ramda's promise composer
var getAnimalData = R.composeP(
  getRelevantPhotoFromFlickrAPI,
  getRelevantInfoFrom3rdPartyAPI,
  getAnimalInfoFromDatabase
);
// Notice how the order of composition goes from right to left.
