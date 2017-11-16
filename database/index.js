const mysql = require('mysql');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Metro123',
  database: 'movies',
});

const db = Promise.promisifyAll(connection);

const store = movieData =>
  db.queryAsync(`INSERT INTO movies (TITLE, Popularity, Date, Watched)
                 VALUES ?`, [movieData]);

const retrieve = () =>
  db.queryAsync('SELECT * FROM movies');

module.exports.store = store;
module.exports.retrieve = retrieve;
