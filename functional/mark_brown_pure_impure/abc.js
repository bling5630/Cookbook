// impure
let items = ['a', 'b', 'c'];
let upperCaseItems = ()=> {
  let arr = [];
  for (let i = 0, ii = items.length; i < ii; i++) {
    let item = items[i];
    arr.push(item.toUpperCase());
  }
  items = arr;
};

console.log(upperCaseItems(items)  + ' first version');

let items2 = ['c', 'b', 'a'];
let upperCaseItems2 = (items)=> {
  let arr = [];
  for (let i = 0, ii = items.length; i < ii; i++) {
    let item = items[0];
    arr.push(item.toUpperCase());
  }
  return arr;
};

console.log(upperCaseItems2(items2) + ' second version');

let items3 = ['zs', 'b', 'c'];
let upperCaseItems3 = (items)=> {
  let arr = [];
  items.forEach((item) => {
    arr.push(item.toUpperCase());
  });
  return arr;
};

console.log(upperCaseItems3(items3) + ' third version');

let items4 = ['sz', 'zs', 'cs'];
let upperCaseItems4 = items4.map((item)=> item.toUpperCase());

console.log(upperCaseItems4 + ' fourth version');
