var mixedEmails = ['ASFDSFDS@gmail.com', 'FSDF@gmail.com', 'OO@gmail.com'];

function getEmailsInLowercase(emails) {
  var lowercaseEmails = [];

  emails.map(function(email) {
    lowercaseEmails.push(email.toLowerCase());
  });
  return lowercaseEmails;
}

var validData = getEmailsInLowercase(mixedEmails);

console.log(validData);
