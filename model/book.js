const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    name: String,
    description: String,
    authorName: String,
    category: String
  });


const Book = mongoose.model('book', booksSchema);


async function main() {
  await mongoose.connect('mongodb+srv://info:YTRSXlMUjmspfNiz@cluster0.tdnn0sx.mongodb.net/?retryWrites=true&w=majority');
  console.log("db connected sucess!!")
  const newBook = new Book({name: "dancing", authorName: "sdcsdv", description: "sdfsdfv", category: "Fiction"})
  await newBook.save()
}


main().catch(err => console.log(err));