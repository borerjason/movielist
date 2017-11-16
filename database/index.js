const mysql = require('mysql');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Metro123',
  database: 'movies',
});

const db = Promise.promisifyAll(connection);

const store = ({ Title, Popularity, ReleaseDate, Watched }) =>
  db.queryAsync(`INSERT INTO movies (TITLE, Popularity, Date, Watched)
                 VALUES (?, ?, ?, ?)`, [Title, Popularity, ReleaseDate, Watched]);

module.exports.store = store;
