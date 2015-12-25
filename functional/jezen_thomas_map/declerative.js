var mixedEmails = ['ASFDSFDS@gmail.com', 'FSDF@gmail.com', 'OO@gmail.com'];

function downcase(str) {
  return str.toLowerCase();
}

var validData = mixedEmails.map(downcase);

console.log(validData);
