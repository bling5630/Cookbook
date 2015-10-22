var _ = require('ramda');

//http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html
//One classic method for composing secret messages is called a square code.
//The spaces are removed from the english text and the characters are written into a square (or rectangle).
//For example, the sentence "If man was meant to stay on the ground, God would have given us roots."
//is 54 characters long, so it is written into a rectangle with 7 rows and 8 columnSize.

//ifmanwas
//meanttos
//tayonthe
//groundgo
//dwouldha
//vegivenu
//sroots

//The coded message is obtained by reading down the columns going left to right.
//For example, the message above is coded as:

//imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
describe("square code challenge", () => {
  var inputs = [
    'If man was meant to stay on the ground, God would have given us roots.',
    'Have a nice day!',
    'Feed the dog.',
    'CHILL OUT!!!'
  ];

  var outputs = [
    'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau',
    'hae and via ecy',
    'fto ehg ee dd',
    'cl ho iu lt'
  ];

  // var cleanInput = _.identity; show the desired result

  var cleanInput = _.pipe(_.toLower, _.replace(/[\s.,!]/g, ''));

  it("#1 exercise - clean input", () => {
    cleanInput('HELLO!!  ...,,').should.eql('hello');
  });

  //Hint:
  //rows = floor of square root of length
  //columns = ceiling of length / rows
  //var determineNumberOfColumns = _.identity; show the desired result

  var determineNumberOfColumns = (input) => {
    var length = input.length,
      columnsFor = _.pipe(
        Math.sqrt,
        //_.tap(console.log),
        Math.floor,
        //_.tap(console.log),
        _.divide(length),
        Math.ceil
        //_.tap(console.log)
      );
    return columnsFor(length);
  };

  it("#2 exercise - determine number of columns", () => {
    var checkColumns = _.map(_.pipe(cleanInput,
      determineNumberOfColumns));
    checkColumns(inputs).should.eql([8, 4, 4, 4]);
  });

  //var turnIntoSquare = _.always(_.identity); show the desired result

  var turnIntoSquare = (columns) => _.splitEvery(columns);

  it("#3 exercise - turn input into square", () => {
    var input = 'haveaniceday';
    turnIntoSquare(4)(input).should.eql([
      'have',
      'anic',
      'eday'
    ]);
  });


  //var fillSquare = _.always(_.identity); show the desired result

  var fillSquare = (columns) => _.map(
    _.ifElse(
      _.pipe(_.length, _.equals(columns)),
      _.identity, (row) => {
        var fillSpaces = _.pipe(
          _.length(),
          _.subtract(columns),
          _.times(_.always(' ')),
          _.concat(row),
          _.join('')
        );
        return fillSpaces(row);
      }
    )
  );

  it("#4 exercise - fill in spaces for any uneven rows", () => {
    var squareWithUneven_ows = [
      'feed',
      'thed',
      'og'
    ];
    fillSquare(4)(squareWithUneven_ows).should.eql([
      'feed',
      'thed',
      'og  '
    ]);
  });

  //var transposeSquare = _.identity; show the desired result


  var transposeSquare = _.converge(
    _.reduce((acc, row) => {
      var flattenAndTrim = _.pipe(_.flatten, _.join(''), _.trim());
      var zipWithAcc = _.pipe(
        _.zip(acc),
        _.map(flattenAndTrim)
      );
      return zipWithAcc(row);
    }),
    _.pipe(_.head, _.map(_.of)),
    _.tail()
  );

  it("#5 exercise - transpose a square", () => {
    var square = [
      'have',
      'anic',
      'eday'
    ];

    transposeSquare(square).should.eql([
      'hae',
      'and',
      'via',
      'ecy'
    ]);
  });


  it("#6 exercise - tranpose an uneven rows square", () => {
    var square = [
      'feed',
      'thed',
      'og'
    ];

    _.pipe(fillSquare(4), transposeSquare)(square).should.eql([
      'fto',
      'ehg',
      'ee',
      'dd'
    ]);
  });

  //var encode = _.identity;show the desired result

  var encode = (input) => {
    var cleanedInput = cleanInput(input);
    var columns = determineNumberOfColumns(cleanedInput);
    var encodeInput = _.pipe(
      turnIntoSquare(columns),
      fillSquare(columns),
      transposeSquare,
      _.join(' ')
    );
    return encodeInput(cleanedInput);
  };

  it("#7 exercise - encode inputs", () => {
    _.map(encode, inputs).should.eql(outputs);
  });

  //var decode = _.identity; the desired result

  var decode = (output) => {
    var decodeOutput = _.pipe(
      _.split(' '),
      _.converge(
        _.call,
        _.pipe(_.head, _.length, fillSquare),
        _.identity
      ),
      transposeSquare,
      _.join(' ')
    );
    return decodeOutput(output);
  };

  it("#8 exercise - decode outputs", () => {
    _.map(decode, outputs).should.eql([
      'ifmanwas meanttos tayonthe groundgo dwouldha vegivenu sroots',
      'have anic eday',
      'feed thed og',
      'chil lout'
    ]);
  });
});
