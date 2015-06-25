var fs = require('fs'),
    fs_starttime;

fs.readFile('lipsum.txt', 'utf8', function(err, data) {
  fs_starttime = Date.now();

  if (err) {
    return console.log(err);
  }

  var start_time = Date.now(),
      splitted = data.split(' '),
      words = [],
      end_time, elapsed, fs_endtime, fs_elapsed;

  console.log('Total: ' + splitted.length);
  fs_endtime = Date.now();
  fs_elapsed = fs_endtime - fs_starttime;
  
  console.log('Countinge: ' + fs_elapsed);
  for(var i=0; i<splitted.length; i++) {
    var key = splitted[i].toLowerCase();
    words[key] = words[key] + 1 || 1;
  }

  end_time = Date.now();
  elapsed = end_time - start_time;
  console.log('Elapsede: ' + elapsed);
});