class MovieData {
    constructor(db, movieModel) {
        this.db = db;
        this.movieModel = movieModel;
        this.collection = this.db.collection('movies');
    }

    getAllMovies(max) {
        return this.collection.find()
            .limit(max)
            .toArray();
    }

    getMovieById(searchedId) {
        return new Promise((resolve, reject) => {
            this.collection.findOne({ id: searchedId }, (error, movie) => {
                if (error) {
                    return reject(error);
                }

                return resolve(movie);
            });
        });
    }

    getMovieByCategory(category, maxSearch) {
        return new Promise((resolve, reject) => {
            const result = this.collection.find({ genres: category })
                .collation({ locale: 'en', strength: 2 }) // strength:2 for case insensitive search
                .limit(maxSearch)
                .toArray();

            return resolve(result);
        });
    }

    getMovieByCategoryAndSubcategory(firstCategory, secondCategory, maxSearch) {
        return new Promise((resolve, reject) => {
            const result = this.collection.find({
                $and: [
                    { genres: firstCategory },
                    { genres: secondCategory },
                ],
            })
                .collation({ locale: 'en', strength: 2 }) // strength:2 for case insensitive search
                .limit(maxSearch)
                .toArray();

            return resolve(result);
        });
    }
}

module.exports = MovieData;
