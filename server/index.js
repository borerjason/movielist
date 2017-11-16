const express = require('express');
const path = require('path');
const getMovies = require('./getMovies');
const db = require('../database/index');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/load', (req, res) => {
  getMovies()
    .then((response) => {
      const movies = response.data.results.map((movie) => {
        return [
          movie.title,
          movie.vote_average,
          movie.release_date,
          false,
        ];
      });
      db.store(movies)
        .then((result) => {
          console.log(result);
          res.end();
        });
    });
});

app.get('/movies', (req, res) => {
  db.retrieve()
    .then((movies) => {
      res.send(movies);
    });
});

app.listen(process.env.PORT || 3000);
