// Given an array of numbers, calculate the sum
var add = function(a,b) {
  return a + b;
};
var numbers = [1, 3, 5, 7, 9];
var total = 0;
for (i = 0; i < numbers.length; i = i + 1) {
    total = add(total, numbers[i]);
}
// total is 25

// Given an array of words, join them together with a space between each word.

function joinWord(sentence, word) {
  return sentence + ' ' + word;
}
var words = ['sparkle', 'fairies', 'are', 'amazing'];
var sentence = '';
for (i = 0; i < words.length; i++) {
    sentence = joinWord(sentence, words[i]);
}
// ' sparkle fairies are amazing'

console.log(total);
console.log(sentence);

// real reduce example

var reduce = function(callback, initialValue, array) {
    var working = initialValue;
    for (var i = 0; i < array.length; i = i + 1) {
        working = callback(working, array[i]);
    }
    return working;
};

var totalReduced = reduce(add, 0, numbers);
var sentenceReduced = reduce(joinWord, '', words);

console.log(totalReduced + " yay");
console.log(sentenceReduced + " hey");

var totally = numbers.reduce(add, 0);
var sentences = words.reduce(joinWord, '');

console.log(totally + " like a champion");
console.log(sentences + " another one");
