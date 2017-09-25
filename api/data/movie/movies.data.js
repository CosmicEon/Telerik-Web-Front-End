class MovieData {
    constructor(db, movieModel) {
        // console.log(db);
        this.db = db;
        this.movieModel = movieModel;
        this.collection = this.db.collection('movies');
    }
    getMovies(max) {
        return this.collection.find()
            .limit(max)
            .toArray();
    }
    getMovieById(id) {
        return new Promise((resolve, reject) => {
            this.collection.findOne({ _id: id }, (error, movie) => {
                if (error) {
                    return reject(error);
                }

                return resolve(movie);
            });
        });
    }
}

module.exports = MovieData;
