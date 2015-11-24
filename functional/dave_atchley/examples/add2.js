function add(a,b) { return a + b; }
var add2 = add.bind(null, 2);
add2(4);   // 6
add2(3,6); // 5  
