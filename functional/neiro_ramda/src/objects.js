// Objects

import _ from 'ramda';

let cat= {
  type:'animal',
  subclass:'mammal',
  binomialName:'Felis catus'
};

console.log(_.assoc('status', 'domesticated', cat).status);

console.log(cat);

console.log(_.dissoc('binomialName', cat).binomialName);

console.log(_.keys(cat), _.has('type', cat), _.prop('type', cat), _.values(cat));

// Object transformation

let transformations={
  type:_.toUpper,
  binomialName:_.toLower
};

console.log(_.evolve(transformations,cat).type);
