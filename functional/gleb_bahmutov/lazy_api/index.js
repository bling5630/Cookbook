var timedPrint = require('./api');
timedPrint('a', 'three', 1000);

// output
//Error: Argument 2: three does not pass predicate: number of times to print should be positive

timedPrint('a', 3, 1000);

// output
/*
a
a
a
done executing workload
*/