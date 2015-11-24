import _ from 'ramda';

// maybe functor factory
const Maybe = val => {
  return {
    val: val,
    fmap: function(fn) {
      if (this.val === null) return Maybe(null);
      return Maybe(fn(this.val));
    }
  };
};

// building blocks

const getFirstName = maybeName => maybeName.fmap(name => name.split(" ")[1]);
const getFirstLetter = maybeString => maybeString.fmap(string => string[0]);

// composition

const firstInitial = _.pipe(getFirstName, getFirstLetter);

// try it

console.log(firstInitial(Maybe('Doc Emmett Brown')).val); // E
console.log(firstInitial(Maybe(null)).val) // null
