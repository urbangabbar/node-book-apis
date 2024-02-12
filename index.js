const express = require('express') // express module import

// we called express function to create app object
const app = express()

// created a get api with url /api/book
app.get('/api/book', (req, res) => {
  res.send('Hello World!')
})

// starting app on port 3000
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})