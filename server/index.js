const express = require('express');
const app = express();

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


app.listen(process.env.PORT || 3000);






