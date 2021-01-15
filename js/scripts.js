"use strict";
let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {
    for (let i = 0; i < 1; i++) {
        const a = prompt('Один из нескольких фильмов?', ''),
              b = prompt('На сколько оценка?', '');
    
        if (a != null && b != null && a!= '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
    
}

// rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log('Нормас')
    } else if (personalMovieDB.count >= 30 ) {
        console.log('Збс');
    } else {
        console.log('Ошибка');
    }
}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGengres () {
    for ( let i = 1; i <= 3; i++) {
         personalMovieDB.genres[i - 1] = prompt(`Любимый жанр под номером ${i}`);
    }
}

writeYourGengres();