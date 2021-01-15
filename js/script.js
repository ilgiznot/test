"use strict";

const numberOfFilms = +prompt('Сколько фильмов?' ,'');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из фильмов', ''),
      b = prompt('Оценка', ''),
      c = prompt('Один из фильмов', ''),
      d = prompt('Оценка', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);