


// building blocks

var myContainer = 'Hey everybody! Come see how good I look!';

function log(someVariable) {
  console.log(someVariable);
  return someVariable;
}

log(myContainer);

// building blocks#2

var log2 = function (someVariable2) {
  console.log(someVariable2);
  return someVariable2;
};

var myContainer2 = 'Hey man!';

log2(myContainer2);

// building blocks#3

var classyMessage = function() {
  return 'wow';
};

log(classyMessage);
// [Function]

// building blocks#4

var doSomething = function (thing) {
  thing();
};

var sayBigDeal = function () {
  var message = 'hey ho Tamas';
  log(message);
};

doSomething(sayBigDeal);

/*
// DRY

// version 1

var el1 = document.getElementById('main-carousel');
var slider1 = new Carousel(el1, 3000);
slider1.init();

var el2 = document.getElementById('news-carousel');
var slider2 = new Carousel(el2, 5000);
slider2.init();

var el3 = document.getElementById('events-carousel');
var slider3 = new Carousel(el3, 7000);
slider3.init();

// version 2

function initialiseCarousel(id, frequency) {
    var el = document.getElementById(id);
    var slider = new Carousel(el, frequency);
    slider.init();
    return slider;
}

initialiseCarousel('main-carousel', 3000);
initialiseCarousel('news-carousel', 5000);
initialiseCarousel('events-carousel', 7000);
*/
