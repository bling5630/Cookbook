var _ = require('ramda'),
  bigInt = require('big-integer');
  //toString = _.invoker('toString', []);

  describe("compute the sum of a list", function () {
    var list = [1,2,3,4,5,6];
    var list31 = [1,2,3,4,5,6,10];
    var list41 = [1,2,3,4,5,6,20];

    it("#1 - with a for loop", function () {
        //var sum = 0;
        var add = function(x,y) {
          return x+y;
        };
        // Ramda way
        var sum = _.reduce(add, 0);
        var total21 = sum(list);
        var total31 = sum(list31);
        var total41 = sum(list41);
/*
        for (var i = 0; i < list.length; i++) {
          sum+= list[i];
        }
*/
        total21.should.eql(21);
        total31.should.eql(31);
        total41.should.eql(41);
    });

    it("#2 - with a while loop", function () {

      var sum = 0;
      var i = 0;
      while (i < list.length) {
        sum+= list[i];
        i++;
      }
      sum.should.eql(21);
    });

    it("#3 - with recursion", function() {
      var sum = (list, acc) => {
        return list.length > 0 ? sum(_.tail(list), _.head(list) + acc)
          : acc;
      };

      sum(list, 0).should.eql(21);
    });





// end
  });
