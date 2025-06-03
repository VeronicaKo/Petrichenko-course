"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many movies have you watched?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many movies have you watched?", "");
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < numberOfFilms; i++) {
    let movie = prompt(`What is your favorite movie? №${i + 1}`).trim();

    if (movie.length > 50 || movie.length == 0 || movie == null) {
      console.log(movie);
      console.log(movie.trim.length);
      console.log(movie == null);
      alert("Name cant be empty or more than 50 symbols");
      i--;
    } else {
      let movieScore = +prompt(
        "How many points did you give for this movie(from 0 to 10)?"
      );

      personalMovieDB.movies[movie] = movieScore;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  switch (true) {
    case numberOfFilms <= 10:
      alert("You have watched a little movies");
      break;
    case numberOfFilms > 10 && numberOfFilms <= 30:
      alert("You are a classical viewer");
      break;
    case numberOfFilms > 30:
      alert("You are a film fan");
      break;
    default:
      alert("Error! Try again");
      break;
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.private);

function writeYourGenres(params) {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres.push(
      prompt(`What is yours favorite genre №${i}?`, "")
    );
  }
}

writeYourGenres();

console.log(personalMovieDB);
