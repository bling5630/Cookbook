var _ = require('ramda'),
  testData = require('./data.json');

describe("ramda demo", () => {
  it("#1 exercise - quick refresher on closures and currying", () => {

    // old ES6 way
    //var addThree = (a) => (b) => (c) => a + b + c,

    // Ramda ES6 way, automatic currying in Ramda
    var addThree = _.curry((a, b, c) => a + b + c),
      hasOneNeedsTwoMore = addThree(1);

    hasOneNeedsTwoMore(2)(3).should.eql(6);
    addThree(1)(2)(3).should.eql(6);
    addThree(1, 2)(3).should.eql(6);
    addThree(1)(2, 3).should.eql(6);
    addThree(1, 2, 3).should.eql(6);

  });


  it("#2 exercise - FP pipelines w/ Ramda compose & pipe", () => {
    //f(g(x))
    //y(g(x))
    //z(g(x))

    var f = (x) => x + 1;
    var g = (x) => x * 5;

    f(g(1)).should.eql(6); // 5 * 1 => 5 + 1 === 6;
    g(f(1)).should.eql(10); // 1 + 1 => 2 * 5 === 10;

    // right to left
    _.compose(f, g)(1).should.eql(6);
    _.compose(g, f)(1).should.eql(10);

    // left to right
    _.pipe(f, g)(1).should.eql(10);
    _.pipe(g, f)(1).should.eql(6);


    var isEven = (x) => x % 2 === 0;
    var multiplyEvens = _.pipe(
      //_.identity use @ brainstorming
      _.filter(isEven),
      _.reduce(_.multiply, 1)
    );

    multiplyEvens(_.range(1, 5)).should.eql(8);
    multiplyEvens(_.range(1, 15)).should.eql(645120);
    multiplyEvens(_.range(1, 25)).should.eql(1961990553600);

  });

  describe("examples based on the JSON data", () => {

    var isActive = _.propEq('isActive', true);
    var overThirty = _.pipe(
      _.prop('age'), (age) => age > 30
    );
    var activeOverThirty = _.pipe(
      _.filter(_.both(isActive, overThirty)),
      _.map(_.path(['name', 'first']))
    );

    it("exercise #3 - first names of isActive=true and age > 30", () => {
      activeOverThirty(testData).should.eql(['Patterson']);

      var excludedTags = [
        'proident'
      ];

      var filterExcludedTags = _.identity;


    });

    it("exercise #4 - reject any with excluded tags", () => {

      var excludedTags = [
        'proident'
      ];

      var isExcludedTag = (tag) => _.any(_.equals(tag),
        excludedTags);

      var filterExcludedTags = _.reject(
        _.pipe(
          _.prop('tags'),
          //_.tap(console.log), print the current status
          _.any(isExcludedTag)
        )
      );

      filterExcludedTags(testData).length.should.eql(2);
    });

    it("exercise #5 - send an email to everybody", () => {

      var expectedResult =
        'mailto:marcie.rollins@isosure.me;janie.donaldson@interloo.biz;rosanna.gonzales@turnabout.co.uk;patterson.compton@franscene.ca;deirdre.parrish@mantrix.biz';

      var makeEmailHref = _.pipe(
        _.map(_.prop('email')),
        _.join(';'),
        _.concat('mailto:')
      );

      makeEmailHref(testData).should.eql(expectedResult);
    });

    it("exercise #6 - all possible sums", () => {

      var allPossibleSums = _.lift((a, b, c) => a + b + c);

      var result = allPossibleSums(
        [1, 2], //a's
        [4, 5], //b's
        [7, 8] //c's
      );
      //example:
      //1 + 4 + 7
      //1 + 4 + 8
      //1 + 5 + 7
      //1 + 5 + 8
      //so on....
      result.should.eql([12, 13, 13, 14, 13, 14, 14, 15]);
    });



  });


});
