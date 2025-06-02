"use strict"

let movieCount = +prompt('How many movies have you watched?');

switch(true) {
    case(movieCount <= 10):
        alert("You have watched a little movies")
        break;
    case(movieCount > 10 && movieCount <= 30):
        alert("You are a classical viewer")
        break;
    case(movieCount > 30):
        alert("You are a film fan")
        break;
    default:
        alert("Error! Try again")
        break;
}

let personalMovieDB = {
    count: movieCount,
    movies: {}
};

for (let i = 0; i < movieCount; i++) {
    let movie = prompt(`What is your favorite movie? №${i+1}`).trim();

    if (movie.length > 50 || movie.length == 0 || movie == null) {
        console.log(movie);
        console.log(movie.trim.length);
        console.log(movie == null);
        alert('Name cant be empty or more than 50 symbols');
        i--;
    } else {
        let movieScore = +prompt('How many points did you give for this movie(from 0 to 10)?');

        personalMovieDB.movies[movie] = movieScore;
    }
}

console.log(personalMovieDB);

let i = 0;
while (i < movieCount) {
    i++;

    let movie = prompt(`What is your favorite movie? №${i+1}`).trim();

    if (movie.length > 50 || movie.length == 0 || movie == null) {
        console.log(movie);
        console.log(movie.trim.length);
        console.log(movie == null);
        alert('Name cant be empty or more than 50 symbols');
        i--;
    } else {
        let movieScore = +prompt('How many points did you give for this movie(from 0 to 10)?');

        personalMovieDB.movies[movie] = movieScore;
    }
}

i = 0;
do {
    i++;

    let movie = prompt(`What is your favorite movie? №${i+1}`).trim();

    if (movie.length > 50 || movie.length == 0 || movie == null) {
        console.log(movie);
        console.log(movie.trim.length);
        console.log(movie == null);
        alert('Name cant be empty or more than 50 symbols');
        i--;
    } else {
        let movieScore = +prompt('How many points did you give for this movie(from 0 to 10)?');

        personalMovieDB.movies[movie] = movieScore;
    }
} while (i < movieCount);