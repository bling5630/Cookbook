var R = require('ramda');

describe("all possibilities of + - or nothing between numbers 1..9 with the original way", function() {
  var numbers = R.range(1, 10);

  it("such that result is always 100", function() {
    var add = (x, y) => x + y;
    var subtract = (x, y) => x - y;
    var concat = (x, y) => parseInt(x.toString() + y.toString());
    var operators = [add, subtract, concat];

    var findPossibilities = (nums, choices) => {
      if (R.isEmpty(nums)) {
        return choices;
      }
      else {
        var operand = R.head(nums);
        var rest = R.tail(nums);
        var newChoices = operators.map((op) => R.isEmpty(rest) ? [operand] : [operand, op]);
        var exploreNewChoices = (choice) => newChoices.map((branch) => R.concat(choice, branch));

        if (R.isEmpty(choices)) {
          return findPossibilities(rest, newChoices);
        }
        else {
          var allChoices = R.chain(exploreNewChoices, choices);
          return findPossibilities(rest, allChoices);
        }
      }
    };

    var calculateAnswer = (choices) => {
      return R.reduce(
        (acc, choice) => {
          if (Array.isArray(acc)) {
            var [operand, operator] = acc;
            return operator(operand, choice);
          }
          else {
            return [acc, choice];
          }
        },
        R.head(choices),
        R.tail(choices)
      );
    };

    var possibilities = findPossibilities(numbers, []);

    var solutions = possibilities
          .map((p) => [p, calculateAnswer(p)])
          .filter(([, a]) => a === 100);

    solutions.length.should.eql(18);
  });
});
