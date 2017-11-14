const express = require('express');
const app = express();
const getMovies = require('./getMovies');

const movies = [
  { title: "Mean Girls" },
  { title: "Hackers" },
  { title: "The Grey" },
  { title: "Sunshine" },
  { title: "Ex Machina" }
];

app.use(express.static(__dirname + '/../client/dist' ));

app.get('/movies' , (req, res) => {
  res.send(movies);  

});

app.get('/load', (req, res) => {
  getMovies()
  .then(response => {
    //console.log(response.data);
    let rawMovies = response.data.results
    let movies = [];
    rawMovies.forEach((movie) => {
      let movieObj = 
        { Title: movie.title,
          ReleaseDate: movie.release_date,
          Popularity: movie.vote_average,
          Watched: false
          }
        movies.push(movieObj);
    })
    // console.log('MOVIE IN SERVER', movies);
  res.send(movies);
  });
});



app.listen(process.env.PORT || 3000);






