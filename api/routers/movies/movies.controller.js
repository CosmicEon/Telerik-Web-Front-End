const moviesController = (data) => {
    const maxMovies = 11;
    const getMovies = (req, res) => {
        data.movies.getMovies(maxMovies)
            .then((result) => {
                res.status(200)
                    .json(result);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getMovie = (req, res) => {
        const id = req.params.id; // in url
        data.movies.getMovieById(id)
            .then((movie) => {
                res.status(200)
                    .json(movie);
            })
            .catch((err) => {
                return res.json(err);
            });
    };

    return {
        getMovies,
        getMovie,
    };
};

module.exports = moviesController;
