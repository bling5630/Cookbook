// calculating standard deviation
// imperative way

var array = [1, 2, 3, 4, 5];

var mean = 0;

// Calculate the mean, first by summing each value in the array
for (var i = 0; i < array.length; i++) {
	mean += array[i];
}

// And then by dividing by the number of elements in the array
mean /= array.length;

var squaredVariations = 0;

for (var i = 0; i < array.length; i++) {
	squaredVariations +=
		(array[i] - mean) * (array[i] - mean);
}

// find the mean square deviation. 

var meanSquare = squaredVariations / (array.length);

// And now calculate the standard deviation by taking the square root

var std = Math.sqrt(meanSquare);

console.log(std); // >> 1.414