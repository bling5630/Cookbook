import _ from 'ramda';

const add = (x,y)=> x+y,
      addCurried = _.curry(add),
      add10 = addCurried(10);

console.log(add10(5)); // 15

const addCurriedAgain = function(x){   // without Ramda
  return function(y){
    return add(x, y);
  };
};
const add20 = addCurriedAgain(20);
console.log(add20(5));  // 25
