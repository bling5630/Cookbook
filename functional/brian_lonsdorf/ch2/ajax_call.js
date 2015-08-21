/*
// original version

// ignorant
var getServerStuff = function(callback){
  return ajaxCall(function(json){
    return callback(json);
  });
};

// enlightened
var getServerStuff = ajaxCall;
*/

// refactored version

// this line
return ajaxCall(function(json) {
	return callback(json);
});

// is the same as this line
return ajaxCall(callback);

// so refactor getServerStuff
var getServerStuff = function(callback) {
	return ajaxCall(callback);
};

// ...which is equivalent to this
var getServerStuff = ajaxCall; // <-- look mum, no ()'s