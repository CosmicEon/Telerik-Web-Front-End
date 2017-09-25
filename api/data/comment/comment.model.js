class Comment {
    constructor(commentData) {
        this._id = commentData._id;
        this.author = commentData.author;
        this.imgSrc = commentData.imgSrc;
        this.text = commentData.text;
        this.subComments = [];
    }

    static toViewModel(model) {
        const viewModel = new Comment();

        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });

        return viewModel;
    }
}

module.exports = { Comment };
