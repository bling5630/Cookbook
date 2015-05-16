// date

var currentdate = new Date();

var datetime = "The current time is " + currentdate.getFullYear() + " @ " + (currentdate.getMonth() + 1) + "/" + currentdate.getDate() + "/" + currentdate.getHours() + ":" + currentdate.getMinutes();

console.log(datetime);

module.exports = datetime;