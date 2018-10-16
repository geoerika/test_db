const testdb = require('./name-find-knex');

const famous = process.argv[2];

testdb.findFamousByName(famous, function (err, data) {
  console.log(data);
});