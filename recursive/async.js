var fs = require('fs');
      infile,
      outfile,
      data,
function asyncSerial() {
  var args = Array.prototype.slice.call(arguments);
  function next() {
    var func = args.shift();
    if (func) {
      func(next);
    }
  }
  next();
};
asyncSerial(
  function(next) {
    infile = process.argv[2] || '';
    fs.exists(infile, function (exists) {
      if (exists) {
        next();
      } else {
        console.log('File does not exist: ' + this.infile);
      }
    });
  },
  function(next) {
    outfile = process.argv[3];
    if (outfile) {
      next();
    } else {
      console.log('Output File Name is Required');
    }
  },
  function(next) {
    fs.readFile(infile, function (err, contents) {
      if (err) {
        console.log('Error reading File: ' + infile);
      } else {
        data = contents;
        next();
      }
    });
  },
  function() {
    fs.writeFile(outfile, data, function (err) {
      if (err) {
        console.log('Error writing File: ' + outfile);
      }
    });
  }
);
