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

const mapCurried = _.curry(map);    // curry !

const getFirstName = name => name.split(" ")[1];
const getFirstLetter = string => string[0];

const firstInitial = _.pipe(
  mapCurried(getFirstName),   // returns a fn that expects one param !
  mapCurried(getFirstLetter)
);

const user = Maybe("Mom Lorraine McFly");
console.log(firstInitial(user).val);    // "L"
