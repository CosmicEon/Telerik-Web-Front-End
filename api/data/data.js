const MovieData = require('./movie/movies.data');
const Movie = require('./movie/movie.model');

const init = (db) => {
    return Promise.resolve({
        // Insert data models here
        movies: new MovieData(db, Movie),
    });
};

module.exports = { init };
