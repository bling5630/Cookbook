var argsToArray(args) {
    return Array.prototype.slice.call(args, 0);
}

var partial = function() {
    // Convert the arguments variable to an array
    var args = argsToArray(arguments);

    // Grab the function (the first argument). args now contains the remaining args.
    var fn = args.shift();

    // Return a function that calls fn
    return function() {
        var remainingArgs = toArray(arguments);
        return fn.apply(this, args.concat(remainingArgs));
    };
};
