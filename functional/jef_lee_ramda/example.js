// example input
var usersBySocialNetwork = {
  twitter: [
    { name: '@RebootJeff' },
    { name: '@doitwithalambda' },
    null
  ],
  facebook: [
    null,
    { name: 'Kevin' },
    { name: 'Bianca' },
  ]
};

// expected output
var users = [
  { name: '@RebootJeff' },
  { name: '@doitwithalambda' },
  { name: 'Kevin' },
  { name: 'Bianca' }
];
