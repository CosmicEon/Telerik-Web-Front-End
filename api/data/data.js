const BooksData = require('./books.data');
const Book = require('../models/book.model');

const init = (db) => {
    console.log(db);
    return Promise.resolve({
        // insert data models here
        books: new BooksData(db, Book),
    });
};

module.exports = { init };
