const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    name: String,
    description: String,
    authorName: String,
    category: String
});

const Book = mongoose.model('book', booksSchema);

module.exports = {
  Book
}
