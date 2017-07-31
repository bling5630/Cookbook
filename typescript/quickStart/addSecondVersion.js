function add(val1, val2) {
    if ((typeof val1 === 'number' && typeof val2 === 'number'))
        return val1 + val2;
    else if (typeof val1 === 'string' && typeof val2 === 'string')
        return val1 + val2;
    return null;
}
var result1 = add(10, 20);
var result2 = add("The number is: ", "10");
var result3 = add("The number is:", 10);

console.log(result1);
console.log(result2);
console.log(result3);
