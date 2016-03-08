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
    return 'yay';
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
  });
});

// feeCalculator 24%

bot.onText(/^\/organica((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(24/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
  });
});

// feeCalculator 25%

bot.onText(/^\/cheppers((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(25/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
  });
});
bot.onText(/^\/docler((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = numberWithDots(Math.floor(25/100*12*i));
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
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
  });
});

bot.onText(/^\/example((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].split(/\s+/).forEach(function (i) {
    var fee = 27/100*12*i;
        result = 'Yo, Dawg you get ' + fee + ' HUF ' + ' you are amazing';
      });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
  });
  // why not pop up in the group
  var fromId = msg.from.id;
  var response = 'yay....bling-bling';
  var photo = 'xzibit.jpg';
  bot.sendMessage(fromId, response);
  bot.sendPhoto(fromId, photo);
});

/*
// Matches /echo [whatever]
bot.onText(/e/, function (msg, match) {
var fromId = msg.from.id;
//var resp = match[1];
var response = 'nem a hetfo a gaz hanem a munkad szar';
var photo = 'cat.jpg';
bot.sendMessage(fromId, response);
bot.sendPhoto(fromId, photo);
});


// Matches /echo [whatever]
bot.onText(/\/e (hi|hello|yo|nigga|szia+)/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = match[1];
  var response = 'nem a hetfo a gaz hanem a munkad szar';
  var photo = 'cat.jpg';
  bot.sendMessage(fromId, response);
  bot.sendPhoto(fromId, photo);
});

// show picture
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'cat.jpg';
  bot.sendPhoto(chatId, photo, {caption: 'You wanna fuck w/ me??'});
});
*/
