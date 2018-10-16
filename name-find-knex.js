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

  function findFamousByName (name, callback) {
    if (name === undefined) {
            console.log('No name provided!');
    } else {

      knex.select('*').from('famous_people')
      .where('first_name', '=', name)
      .orWhere('last_name', '=', name)
      .asCallback(function(err, rows) {
        if (err) {
          return console.error("error running query", err);
        } else {
            callback(err, rows);
        }
        knex.destroy();
      })
    }
  }

  return {
    findFamousByName: findFamousByName,
  }

})()