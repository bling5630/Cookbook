var _ = require('ramda');

var BASE_TEAM = 'csikiandras bondicibalazs tothdavid lassulilla malanchuknatalia kovacspeter batizpeter nemethtamas tothzsofia feketezsofia szilagyiagnes komarbalazs egbewunmidiana szabozsofia';
var BASE_RANDOM_NUMBER = 14;

var sliceTheItems = _.slice(0,4);
var sortNamesByTheRule = _.sortBy(_.prop("number"));
var transformDataToJSON = _.pipe(_.toPairs, _.map(_.zipObj(["name", "number"])));
var randomNumberGenerator = _.times(Math.random, BASE_RANDOM_NUMBER);
var splitTheContent = _.split(' ');

var TEAM = splitTheContent(BASE_TEAM);
var RANDOM = randomNumberGenerator;
var zipTeamMembersWithRandomNumbers = _.zipObj(TEAM,RANDOM);


// console.log(sliceTheItems(sortNamesByTheRule(transformDataToJSON(zipTeamMembersWithRandomNumbers))));
console.log(TEAM);
