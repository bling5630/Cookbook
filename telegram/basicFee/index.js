var token = '198828258:AAH6M0XziBewxYIi10bYMeojZiqvewmYdOE';
var _ = require('ramda');
var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

console.log('bot server started...');

// hello command
bot.onText(/^\/say_hello (.+)$/, function (msg, match) {
  var name = match[1];
  bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
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
bot.onText(/^\/waz((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].trim().split(/\s+/).forEach(function (i) {
    result += (+i || 0);
  });
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
  });
});

// Matches /echo [whatever]
bot.onText(/e/, function (msg, match) {
  var fromId = msg.from.id;
  //var resp = match[1];
  var response = 'nem a hetfo a gaz hanem a munkad szar';
  var photo = 'cat.jpg';
  bot.sendMessage(fromId, response);
  bot.sendPhoto(fromId, photo);
});
/*


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
