const BooksData = require('./books/books.data');
const Book = require('./books/book.model');

const init = (db) => {
    return Promise.resolve({
        // Insert data models here
        books: new BooksData(db, Book),
    });
};

module.exports = { init };
