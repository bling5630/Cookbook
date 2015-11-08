var obj = { a: 1, b: 2 },
    obj2 = Object.create(obj, {
      c: { value: 3, enumerable: true },
      d: { value: 4, enumerable: true }
    });

for (var prop in obj2) {
    console.log(prop);
}
// a b c d
for (var prop in obj2) {
    if (obj2.hasOwnProperty(prop)) {
        console.log(prop);
    }
}
// c d

console.log(obj);
