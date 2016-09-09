var token = '198828258:AAH6M0XziBewxYIi10bYMeojZiqvewmYdOE';
var _ = require('ramda');
var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

console.log('bot server started...');

// print a number with dots as thousands separators
function numberWithDots(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// hello command
bot.onText(/^\/say_hello (.+)$/, function (msg, match) {
  var name = match[1];
  bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
    // reply sent!
  });
});

// list of commands
bot.onText(/list/, function (msg, match) {
  bot.sendMessage(msg.chat.id,
    'you can calculate your fee with this ' +
    'formula: /cheppers 550000 => ' +
    'Yo, Dawg you get 1.650.000 HUF  you are amazing')
    .then(function () {
    // reply sent!
  });
});

// sum command
bot.onText(/^\/sum((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].trim().split(/\s+/).forEach(function (i) {
    result += (+i || 0);
  });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/bling.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});

// feeCalculator 17%

bot.onText(/^\/gawker((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(17/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/cat.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});

// feeCalculator 18%

bot.onText(/^\/liligo((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(18/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/dicaprio.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});
bot.onText(/^\/odigeo((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(18/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/goldshirt.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});
bot.onText(/^\/realeyes((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(18/100*12*i));
    result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
  });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/kevinhart.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});

// feeCalculator 19%

bot.onText(/^\/9gag((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(19/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/shaq.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});
bot.onText(/^\/balabit((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(19/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/xzibit.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});
bot.onText(/^\/falcon((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(19/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/bling.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});

// feeCalculator 20%

bot.onText(/^\/cognex((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(20/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/cat.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});
bot.onText(/^\/scarab((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(20/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/dicaprio.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});

// feeCalculator 21%

bot.onText(/^\/chemaxon((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(21/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/goldshirt.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});
bot.onText(/^\/ultinous((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(21/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/kevinhart.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});

// feeCalculator 22%

bot.onText(/^\/benovative((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(22/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/shaq.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});
bot.onText(/^\/grabowski((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(22/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/xzibit.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});

// feeCalculator 23%

bot.onText(/^\/leopoly((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(23/100*12*i));
        result = 'OMG you did ' + fee + ' HUF ' + ' hard to believe it';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/shaq.jpg';
    bot.sendPhoto(chatId, photo, {caption: "huh-huh"});
  });
});

// feeCalculator 24%

bot.onText(/^\/organica((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(24/100*12*i));
        result = 'Yo, ni**gg**aa you get ' + fee + ' HUF ' + ' you are awesome';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/kevinhart.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....I am Kevin Hart"});
  });
});

// feeCalculator 25%

bot.onText(/^\/cheppers((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(25/100*12*i));
        result = 'Hey, hey you get ' + fee + ' HUF ' + ' it was a good day';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/cat.jpg';
    bot.sendPhoto(chatId, photo, {caption: "want beef"});
  });
});
bot.onText(/^\/docler((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(25/100*12*i));
        result = 'Yo, you get ' + fee + ' HUF';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/dicaprio.jpg';
    bot.sendPhoto(chatId, photo, {caption: "I am the winner man :)"});
  });
});
bot.onText(/^\/waltdisney((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(25/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/goldshirt.jpg';
    bot.sendPhoto(chatId, photo, {caption: "ohh....my new gold shirt is nice"});
  });
});

// feeCalculator 27%

bot.onText(/^\/incepteam((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(27/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
    var chatId = msg.chat.id;
    var photo = __dirname + '/public/bling.jpg';
    bot.sendPhoto(chatId, photo, {caption: "yay....bling-bling"});
  });
});
