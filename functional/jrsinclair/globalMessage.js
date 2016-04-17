/*
var myGlobalMessage = '{{verb}} me';

var impureInstuction = function(verb) {
    return myGlobalMessage.replace('{{verb}}', verb);
};

var eatMe = impureInstruction('Eat');
//=> 'Eat me'
var drinkMe = impureInstruction('Drink');
//=> 'Drink me'
*/

var pureInstruction = function (verb) {
    var message =  '{{verb}} me';
    return message.replace('{{verb}}', verb);
};
/*
var getHTMLImpure = function(id) {
    var el = document.getElementById(id);
    return el.innerHTML;
};
*/
var getHTML = function(doc, id) {
    var el = doc.getElementById(id);
    return el.innerHTML;
};

var stubDoc = {
    getElementById: function(id) {
        if (id === 'jabberwocky') {
            return {
                innerHTML: '<p>Twas brillig…'
            };
        }
    }
};

assert.equal(getHTML('jabberwocky'), '<p>Twas brillig…');
//=> test passes

var htmlGetter = function(id) {
    return function() {
        var el = document.getElementById(id);
    return el.innerHTML;
  };
};
