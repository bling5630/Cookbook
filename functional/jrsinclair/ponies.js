var ponies = [
    [
        ['name', 'Fluttershy'],
        ['image', 'http://tinyurl.com/gpbnlf6'],
        ['description', 'Fluttershy is a female Pegasus pony and one of the main characters of My Little Pony Friendship is Magic.']
    ],
    [
        ['name', 'Applejack'],
        ['image', 'http://tinyurl.com/gkur8a6'],
        ['description', 'Applejack is a female Earth pony and one of the main characters of My Little Pony Friendship is Magic.']
    ],
    [
        ['name', 'Twilight Sparkle'],
        ['image', 'http://tinyurl.com/hj877vs'],
        ['description', 'Twilight Sparkle is the primary main character of My Little Pony Friendship is Magic.']
    ]
];


var map = function(callback, array) {
    var newArray = [];
    for (var i = 0; i < array.length; i = i + 1) {
        newArray[i] = callback(array[i], i);
    }
    return newArray;
};


var reduce = function(callback, initialValue, array) {
    var working = initialValue;
    for (var i = 0; i < array.length; i = i + 1) {
        working = callback(working, array[i]);
    }
    return working;
};

var addToObject = function(obj, arr) {
    obj[arr[0]] = arr[1];
    return obj;
};

var ponyArrayToObject = function(ponyArray) {
    return reduce(addToObject, {}, ponyArray);
};

var tidyPonies = map(ponyArrayToObject, ponies);

// console.log(tidyPonies);

/*
// sample tmplate

var data = { name: "Fluttershy" };
t("Hello {name}!", data);
// "Hello Fluttershy!"
data = { who: "Fluttershy", time: Date.now() };
t("Hello {name}! It's {time} ms since epoch.", data);
// "Hello Fluttershy! It's 1454135887369 ms since epoch."


*/

function joinWord(sentence, word) {
  return sentence + ' ' + word;
}

function t(s,d){
 for(var p in d)
   s=s.replace(new RegExp('{'+p+'}','g'), d[p]);
 return s;
}

var ponyToListItem = function(pony) {
  var template = '<li><img src="{image}" alt="{name}"/>' +
  '<div><h3>{name}</h3><p>{description}</p>' +
  '</div></li>';
  return t(template, pony);
};


var ponyList = map(ponyToListItem, tidyPonies);
var html = '<ul>' + reduce(joinWord, '', ponyList) + '</ul>';

console.log(html);
