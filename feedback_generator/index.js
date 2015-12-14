var _ = require('ramda');

var BASE_TEAM = 'csikiandras bondicibalazs tothdavid lassulilla malanchuknatalia kovacspeter batizpeter nemethtamas tothzsofia feketezsofia szilagyiagnes komarbalazs egbewunmidiana szabozsofia';
var BASE_RANDOM_NUMBER = 14;

var sliceTheItems = _.slice(0,1);
var sortNamesByTheRule = _.sortBy(_.prop("number"));
var transformDataToJSON = _.pipe(_.toPairs, _.map(_.zipObj(["name", "number"])));
var randomNumberGenerator = _.times(Math.random, BASE_RANDOM_NUMBER);
var splitTheContent = _.split(' ');

var BASE_SPLITTED_TEAM = splitTheContent(BASE_TEAM);
var BASE_RANDOM_NUMBERS = randomNumberGenerator;
var zipTeamMembersWithRandomNumbers = _.zipObj(BASE_SPLITTED_TEAM, BASE_RANDOM_NUMBERS);

console.log(sliceTheItems(sortNamesByTheRule(transformDataToJSON(zipTeamMembersWithRandomNumbers))));
