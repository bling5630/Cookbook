/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 
  //code here for sayHi
   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   
and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }
   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



//Code Here for first

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

/*
// original
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});
*/

var first = function(data, cb) {
  cb(data);
};

first(names, function(firstName) {
  console.log(firstName);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var names_2 = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

/*
// original
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});
*/

var last = function(data, cb) {
  console.log(data);
};

last(names_2, function(lastName) {
  console.log(lastName);
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

//Code Here for multiply

/*
// original
multiply(4, 3, function(answer) {
  console.log('The answer is ', answer); //should console.log 12
});
*/

var multiply = function(a, b, cb) {
  console.log(a * b);
};

multiply(4, 3, function(answer) {
  console.log(answer);
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

//Code Here for contains

var names_3 = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

/*
contains(names_3, 'Colt', function(result) {
  if (result === true) {
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});
*/

var contains = function(data, result, cb) {
  console.log(result);
};

contains(names_3, 'Colt', function(result) {
  if (result === true) {
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

//Code Here for uniq

var names_4 = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

/*
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});
*/


var uniq = (names_4.reduce(function(a, b) {
  if (a.indexOf(b) < 0) a.push(b);
  return a;
}, []));

console.log(uniq);

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

//Code Here for each

var names_5 = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

/*
each(names, function(item, indice) {
  console.log('The item in the ' + indice + ' position is ' + item)
});
*/

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//code here for getUserById

var users = [{
  id: '12d',
  email: 'tyler@gmail.com',
  name: 'Tyler',
  address: '167 East 500 North'
}, {
  id: '15a',
  email: 'cahlan@gmail.com',
  name: 'Cahlan',
  address: '135 East 320 North'
}, {
  id: '16t',
  email: 'ryan@gmail.com',
  name: 'Ryan',
  address: '192 East 32 North'
}, ];



var getUserById = users.filter(function(user) {
  if (user.id === '16t') {
    console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
  };
})
