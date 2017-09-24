class BooksData {
    constructor(db, bookModel) {
        // console.log(db);
        this.db = db;
        this.bookModel = bookModel;
        this.collection = this.db.collection('books');
    }
    getAllBooks() { }
}

module.exports = BooksData;
