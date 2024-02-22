const express = require('express') // express module import
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const { Book } = require('./model/book');

// we called express function to create app object
const app = express()


// create application/json parser
app.use(bodyParser.json())

// add support for cross origin
app.use(cors());

const books = []

app.post("/api/book",async (req, res)=> {
  const newBook = new Book({...req.body})
  await newBook.save()
  res.send(newBook)
})

app.get("/api/book",async (req, res)=> {
  const books = await Book.find({});
  res.send(books)
})

// :bookId shown over here is path variable
app.get("/api/book/:bookid", (req, res)=>{
  const { bookid } = req.params;
  const book = books.find(book => book._id === parseInt(bookid))
  if(!book){
    res.status(400).send({err: "Invalid bookid"})
  }
  res.send(book)
})

app.delete("/api/book/:bookid", (req, res)=>{
  const { bookid } = req.params;
  const bookIndex = books.findIndex(book => book._id === parseInt(bookid))
  if(bookIndex === -1){
    return res.status(400).send({err: "Invalid bookid"})
  }else{
    books.splice(bookIndex, 1)
    return res.status(204).send()
  }
})

app.put("/api/book/:bookid", (req, res)=>{
  const { bookid } = req.params;
  const bookBody = req.body
  const bookIndex = books.findIndex(book => book._id === parseInt(bookid))
  if(bookIndex === -1){
    return res.status(400).send({err: "Invalid bookid"})
  }else{
    books[bookIndex] = {
      ...bookBody,
      _id: bookid
    }
    return res.send(books[bookIndex])
  }
})


// starting app on port 3000
const port = 3000
mongoose.connect('mongodb+srv://abhinav:yUj5GxHhxGPx27p@cluster0.gboeuco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=> {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}).catch(err =>  console.error(err))
