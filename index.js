const express = require('express') // express module import
const bodyParser = require('body-parser')

// we called express function to create app object
const app = express()

function generateUniqueId() {
  return Math.floor(1000 + Math.random() * 9000);
}

// create application/json parser
app.use(bodyParser.json())

const books = []

app.post("/api/book", (req, res)=> {
  const newBook = {...req.body, _id: generateUniqueId()}
  books.push(newBook)
  res.send(newBook)
})

app.get("/api/book", (req, res)=> {
  res.send(books)
})

// starting app on port 3000
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})