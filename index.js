const express = require('express') // express module import
const cors = require('cors')
const bodyParser = require('body-parser')

// we called express function to create app object
const app = express()

function generateUniqueId() {
  return Math.floor(1000 + Math.random() * 9000);
}

// create application/json parser
app.use(bodyParser.json())

// add support for cross origin
app.use(cors());

const books = []

app.post("/api/book", (req, res)=> {
  const newBook = {...req.body, _id: generateUniqueId()}
  books.push(newBook)
  res.send(newBook)
})

app.get("/api/book", (req, res)=> {
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


// starting app on port 3000
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})