// const { Book } = require('../models/book.model');

// const booksData = (db, bookModel) => {
//     return {};
// };
class BooksData {
    constructor(db, bookModel) {
        console.log(db);
        this.db = db;
        this.bookModel = bookModel;
        this.collection = this.db.collection('books');
    }
    getAllBooks() { }
}

module.exports = BooksData;
