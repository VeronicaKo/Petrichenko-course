"use strict";

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    this.count = +prompt("How many movies have you watched?", "");
    while (this.count == "" || this.count == null || isNaN(this.count)) {
      this.count = +prompt("How many movies have you watched?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < this.count; i++) {
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
  },
  detectPersonalLevel: function () {
    switch (true) {
      case this.count <= 10:
        alert("You have watched a little movies");
        break;
      case this.count > 10 && this.count <= 30:
        alert("You are a classical viewer");
        break;
      case this.count > 30:
        alert("You are a film fan");
        break;
      default:
        alert("Error! Try again");
        break;
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    this.private = !this.private;
  },
  writeYourGenres: function (params) {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`What is yours favorite genre №${i}?`, "");
      if (genre != null && genre != "") {
        personalMovieDB.genres.push(genre);
      } else {
        console.log("Data is incorrect! Try again");
        i--;
      }
    }

    this.genres.forEach((el, i) => {
      console.log(`Favorite genre №${i + 1} - ${el}`);
    });
  },
};
