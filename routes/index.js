const express = require("express");
const router = express.Router();

// Require Movie model to be able to use it on this script to get data from DB
const Movie = require("../models/Movie.model");

// GET home page
router.get("/", (req, res, next) => res.render("index"));

// GET movies page
router.get("/movies", (req, res, next) => {
  Movie.find()
    .select({ title: 1, image: 1 })
    .then((moviesList) => {
      res.render("movies.hbs", {
        moviesList
      });
    })
    .catch((err) => {
      next(err);
    });
});

// GET movie details page
router.get("/movie/:id", (req, res, next) => {

    const { id } = req.params

    Movie.findById(id)
    .then((movieDetails) => {
        res.render("details.hbs", {
            movieDetails
        })
    })
    .catch((err) =>{
        next(err)
    })
})


module.exports = router;
