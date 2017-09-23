const BooksData = require('./books/books.data');
const Book = require('./books/book.model');

const init = (db) => {
    console.log(db);
    return Promise.resolve({
        // insert data models here
        books: new BooksData(db, Book),
    });
};

module.exports = { init };
