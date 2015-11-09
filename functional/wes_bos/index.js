var  _ = require('ramda');

var durations = ["12:38", "6:36", "9:03", "8:34", "5:02",
                  "6:54", "13:22", "4:41", "8:36", "21:58",
                  "3:06", "10:46", "10:13", "12:54", "14:00",
                  "11:03", "16:03", "10:52", "24:53", "10:03",
                  "11:49", "15:47", "3:19", "2:06", "5:47", "1:03",
                  "5:29", "5:47", "26:39"];

// Above is a list of video lengths, how long are all
// the videos together?
// write a function that will take
// the above array of string durations and convert it
// hours/mins/seconds
// You can use any JS you want - loops/map/reduce/etc...

var to_string = _.toString;
var to_slice = _.slice(1,5);

// console.log("112:23".replace(/:/g, "."));

var result = _.compose(
  to_string,
  to_slice

);
console.log(durations.toString().replace(/:/g, "."));
