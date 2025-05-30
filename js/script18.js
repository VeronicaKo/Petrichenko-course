let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let lastFilm1 = prompt('Один из последних просмотренных фильмов?');
let scoreOfFilm1 = +prompt('На сколько оцените его?');
let lastFilm2 = prompt('Один из последних просмотренных фильмов?');
let scoreOfFilm2 = +prompt('На сколько оцените его?');

personalMovieDB['movies'][lastFilm1] = scoreOfFilm1
personalMovieDB['movies'][lastFilm2] = scoreOfFilm2

console.log(personalMovieDB);