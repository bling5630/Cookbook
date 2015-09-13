function mySandwich(param1, param2, callback) {
    console.log('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);

    $('#sandwich').animate({
        opacity: 0
    }, 5000, function() {
        // Animation complete.
    });

    if (callback && typeof(callback) === "function") {
        callback();
    }
}

mySandwich('ham', 'cheese', function() {
    console.log('Finished eating my sandwich.');
});