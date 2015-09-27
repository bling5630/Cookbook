function hasWildHair(person) {
    return person.hairColor !== 'Green' || person.hairColor !== 'Pink'
}

function isOfAge(person) {
    return person.age > 17;
}

function ensureDriversLicense(person, callback) {
    Database.getDriversLicenseByPersonId(person.id, function(err, license) {
      if (err) {
          callback(err);
      }
      else if (license.expired) {
          callback('Person must have valid license.');
      }
      else {
          callback(null, person);
      }
    });
}

function createEmployee(personId, callback) {
    var workflow = async.compose(
        Database.createEmployee,
        ensureDriversLicense,
        ensureWashingtonAddress,
        function(person, callback) {
            if (hasWildHair(person)) {
                callback(null, person);
            }
            else {
                callback('Person must have wild hair.');
            }
        },
        function(person, callback) {
            if (isOfAge(person)) {
                callback(null, person);
            }
            else {
                callback('Person must be 18+ years of age.');
            }
        }
        Database.getPersonById);

    workflow(personId, callback);
}
