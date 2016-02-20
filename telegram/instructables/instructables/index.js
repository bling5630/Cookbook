var bot = require('telegram-bot-bootstrap');
var fs = require('fs');
var chat = 89687116; //replace this with your chat id noted previously
var text="this is my sample test"; //replace this with your message
var token = "197126116:AAGD6ht9LnOLY67aoV85aDHp_2CkkxC_iuU"; //replace token with the token given by botfather
var Alice = new bot(token);
Alice.getUpdates().then(console.log);
// you'll see an update message. Look for your user_id in "message.from.id"
// Once you get your id to message yourself, you may:
Alice.sendMessage(chat, text); // you'll receive a message from Alice..then(console.log)// ? optional, will log the successful message sent over HTTP
