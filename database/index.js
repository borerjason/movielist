const mysql = require('mysql');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Metro123',
});

connection.connect();
