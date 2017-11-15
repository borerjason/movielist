const express = require('express');
const path = require('path');
const getMovies = require('./getMovies');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/load', (req, res) => {
  getMovies()
    .then((response) => {
      const rawMovies = response.data.results;
      const movies = [];
      rawMovies.forEach((movie) => {
        const movieObj = {
          Title: movie.title,
          ReleaseDate: movie.release_date,
          Popularity: movie.vote_average,
          Watched: false,
        };
        movies.push(movieObj);
      });
      res.send(movies);
    });
});

app.listen(process.env.PORT || 3000);
