var http = require("http");
var nock = require('nock'),
	test = require('tape'),
	http = require('http'),
	request = require('request'),
	tapSpec = require('tap-spec');

var wordCount = require('./request');

nock('https://medium.com')
	.get('/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363')
	.reply(200, 'mivan?');


wordCount(function(err, body) {
	console.log(body === 'mivan?');
	
	console.log(typeof body === 'string');
});

