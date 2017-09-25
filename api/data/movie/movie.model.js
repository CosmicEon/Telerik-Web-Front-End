class Movie {
    constructor(movieData) {
        this.title = movieData.title;
        this.year = movieData.year;
        this.duration = movieData.duration;
        this.imgSrc = movieData.imgSrc;
        this.genres = movieData.genres;
        this.description = movieData.description;
        this.director = movieData.director;
        this.cast = movieData.cast;
        this.id = movieData.id;
        this.posts = [];
    }

    static toViewModel(model) {
        const viewModel = new Movie();

        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });

        return viewModel;
    }
}

module.exports = { Movie };
