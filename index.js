require('dotenv').config()
const express = require('express') // express module import
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const {BookRouter} = require('./book/routes')

// we called express function to create app object
const app = express()


// create application/json parser
app.use(bodyParser.json())

// add support for cross origin
app.use(cors());
app.use('/api/book', BookRouter)


mongoose.connect(process.env.CONNECTION_STRING).then(() => {
  app.listen(parseInt(process.env.PORT), () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })
}).catch(err => console.error(err))
