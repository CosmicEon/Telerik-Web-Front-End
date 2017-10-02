const maxReturn = 55;
const maxSearchMovies = 11;
const moviesController = (data) => {
    const getAllMovies = (req, res) => {
        data.movies.getAllMovies(maxReturn)
            .then((result) => {
                res.status(200)
                    .json(result);
            })
            .catch((err) => {
                return res.json(err);
            });
    };

    const getMovieById = (req, res) => {
        const id = parseInt(req.params.id, 10); // returns string

        data.movies.getMovieById(id)
            .then((movie) => {
                res.status(200)
                    .json(movie);
            })
            .catch((err) => {
                return res.json(err);
            });
    };

    const getMovieByCategoryAndSubcategory = (req, res) => {
        const firstCategory = req.params.category;
        const secondCategory = req.params.subcategory;

        data.movies.getMovieByCategoryAndSubcategory(firstCategory, secondCategory, maxSearchMovies)
            .then((movie) => {
                res.status(200)
                    .json(movie);
            })
            .catch((err) => {
                return res.json(err);
            });
    };

    const getMovieByCategory = (req, res) => {
        const category = req.params.category;

        data.movies.getMovieByCategory(category, maxSearchMovies)
            .then((movie) => {
                res.status(200)
                    .json(movie);
            })
            .catch((err) => {
                return res.json(err);
            });
    };

    return {
        getAllMovies,
        getMovieById,
        getMovieByCategoryAndSubcategory,
        getMovieByCategory,
    };
};

module.exports = moviesController;
