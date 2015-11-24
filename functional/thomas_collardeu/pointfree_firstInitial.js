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


const map = (fn, functor) => functor.fmap(fn);

const getFirstName = name => name.split(" ")[1];
const getFirstLetter = string => string[0];

// standalone JS idea
const getFirstInitial = maybeName => {
  const maybeFirstName = map(getFirstName, maybeName);
  const maybeFirstLetter = map(getFirstLetter, maybeFirstName);
  return maybeFirstLetter;
};

const user = Maybe("Bully Biff Tannen");
console.log(getFirstInitial(user).val);    // "B"
