// babel index.js | node
require('babel-core/register');
var tg = require('telegram-node-bot')('136269381:AAFBRWJX4JP7rT8norhkFT3sq-LDBRSfkJA');

tg.router.
    when(['ping'], 'PingController');

tg.controller('PingController', ($) => {
  'use strict';
    tg.for('ping', () => {
        $.sendMessage('pong');
    });
});
