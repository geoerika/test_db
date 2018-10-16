const knexdb = require('./ad_person');

const famous_first_name = process.argv[2];
const famous_last_name = process.argv[3];
const famous_birthdate = process.argv[4];

console.log(famous_first_name, famous_last_name, famous_birthdate);
knexdb.insertFamousPerson(famous_first_name, famous_last_name, famous_birthdate, function (err, data) {
  console.log(data);
});