const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Movie = require('../models/movie');

// Add movie
router.post('/addmovie', (req, res, next) => {
  let newMovie = new Movie ({
    username: req.body.username,
    moviename: req.body.moviename,
    moviescore: req.body.moviescore
  });

  Movie.addMovie(newMovie, (err, movie) => {
    if(err) {
      res.json({success: false, msg: 'Failed to add movie'});
    } else {
      res.json({success: true, msg: 'Movie added'});
    }
  });
});

// Get movies
router.get('/getmovies', (req, res, next) => {
  let username = req.query.username;

  Movie.getMoviesByUsername(username, (err, movies) => {
    if(err) {
      res.json({success: false, msg: 'Failed to get movies.'});
    } else {
      res.json(movies);
    }
  });
});

router.post('/deletemovie', (req, res, next) => {
  let username = req.body.username;
  let moviename = req.body.moviename;

  Movie.deleteMovie(username, moviename, (err) => {
    if(err) {
      res.json({success: false, msg: 'Failed to delete movie.'});
    } else {
      res.json({success: true, msg: 'Succesfully deleted movie.'});
    }
  });
});


module.exports = router;
