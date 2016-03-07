var Bot = require('telegram-api');
var Message = require('telegram-api/types/Message');
var File = require('telegram-api/types/File');

var bot = new Bot({
  token: '198828258:AAH6M0XziBewxYIi10bYMeojZiqvewmYdOE'
});

console.log('bot server started...');

bot.start();

bot.get(/Hi|Hey|Hello|Yo/, function(message) {
  var answer = new Message().text('Hello, Sir WhatDaFunk').to(message.chat.id);

  bot.send(answer);
});

//bot.get(/realEyes|cheppers|incepteam|organica/, function(message) {
bot.get(/money (.+)$/, function(message) {
  var realEyes=18,
      cheppers=25,
      incepteam=27,
      organica=24;
  var yourFee = function feeCalculator(fee, salary) {
                    return fee/100*salary*12;};
  var answer = new Message().text('Yo, Bro you get ' + yourFee(cheppers, 500000)).to(message.chat.id);

  bot.send(answer);
});
bot.get(/realEyes/, function(message) {
  var realEyes=18;
  var salary = 500000;
  var result = salary*12*realEyes/100;
  var answer = new Message().text('Yo, Bro you get ' + result).to(message.chat.id);

  bot.send(answer);
});
