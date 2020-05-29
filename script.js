"use strict";

//1 задание
const numberOfMovies = prompt("Сколько фильмов ты посмотерл?", "");
console.log(numberOfMovies);

//2 задание
const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};