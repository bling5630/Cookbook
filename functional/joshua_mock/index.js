// hard to test
function createGreeting(name, location, age) {
    var greeting;
    if (location === 'Mexico') {
        greeting = '!Hola';
    } else {
        greeting = 'Hello';
    }

    greeting += ' ' + name.toUpperCase() + '! ';

    greeting += 'You are ' + age + ' years old.';

    return greeting;
}

// easy to test
function getBeginning(location) {
    if (location === 'Mexico') {
        return '¡Hola';
    } else {
        return 'Hello';
    }
}

function getMiddle(name) {
    return ' ' + name.toUpperCase() + '! ';
}

function getEnd(age) {
    return 'You are ' + age + ' years old.';
}

function createGreeting(name, location, age) {
    return getBeginning(location) + getMiddle(name) + getEnd(age);
}

console.log(createGreeting('Tamas', 'Budapest', 32));
// => Hello TAMAS! You are 32 years old.
