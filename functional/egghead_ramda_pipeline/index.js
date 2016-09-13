var _ = require('ramda');

const teams = [
  {name: 'Lions', score:5 },
  {name: 'Tigers', score:4 },
  {name: 'Bears', score:2 },
  {name: 'Monkeys', score:6 },
];

const sortByScoreDesc = _.sort((a,b)=> b.score - a.score);
const getName = _.prop('name');


const getTopName = _.pipe(
  sortByScoreDesc,
  _.head,
  getName
);



/*
const getTopName = function(teams) {
  const sorted = sortByScoreDesc(teams);
  const topTeam = _.head(sorted);
  const topName = getName(topTeam);
  return topName;
};
*/


const result = getTopName(teams);
console.log(result);
