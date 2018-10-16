const pg = require("pg");
const settings = require("./settings"); // settings.json

const knex = require ('knex') ({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});


module.exports = (function() {

  function insertFamousPerson (firstname, lastname, birthdateinput, callback) {

    knex('famous_people').insert({first_name: firstname, last_name: lastname, birthdate: birthdateinput}).finally(() => {
      knex.destroy();
      })
  }

  return {
    insertFamousPerson: insertFamousPerson,
  }

})()