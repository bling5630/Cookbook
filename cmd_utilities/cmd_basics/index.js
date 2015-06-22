#!/usr/bin/env node

//console.log('Hello World');
//console.log(process.argv);

var args = process.argv.slice(1);

console.log(args);

//Exit codes

if (err) {
  process.exit(1);
} else {
  process.exit(0);
}

//Piping data

ps aux | grep 'node'
