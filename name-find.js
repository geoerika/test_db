const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

module.exports = (function() {

  client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
  });

  function findFamousByName (name, callback) {

    client.query('SELECT * FROM famous_people WHERE first_name=$1::text OR last_name=$1::text', [name], (err, result) => {
      if (err) {
        return console.error("error running query", err);
      } else {
        if (name === undefined) {
            console.log('No name provided!');
        } else {
          callback(err, result.rows);
        }
      }
      client.end();
    });
  }

  return {
    findFamousByName: findFamousByName,
  }

})()


