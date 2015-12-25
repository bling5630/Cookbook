var mixedEmails = ['ASFDSFDS@gmail.com', 'FSDF@gmail.com', 'OO@gmail.com'];

function getEmailsInLowerCase(emails) {
    var lowercaseEmails = [];

    for (var i = 0; i < emails.length; i++) {
        lowercaseEmails.push(emails[i].toLowerCase());
      }
      return lowercaseEmails;
}

var validData = getEmailsInLowerCase(mixedEmails);

console.log(validData);
