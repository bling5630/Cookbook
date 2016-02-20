var token = '190536300:AAFPPCPraAoGPvZdfbrPodLU0rmY5HHqHQU';

// 147386010:AAGYxXo4z4zDiw6VM0BderWaAlM3AeSzehM

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

console.log('bot server started...');

// hello command
bot.onText(/^\/say_hola (.+)$/, function (msg, match) {
  var name = match[1];
  bot.sendMessage(msg.chat.id, 'Hola ' + name + '!').then(function () {
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
