const express = require('express')
const router = express.Router()
const { Book } = require('../model/book');


router.post("/", async (req, res) => {
    const newBook = new Book({ ...req.body })
    await newBook.save()
    res.send(newBook)
})

router.get("/", async (req, res) => {
    const { category } = req.query;
    const query = {}
    if (category) {
        query.category = { $eq: category }
    }
    const books = await Book.find(query).sort({ name: -1 });
    res.send(books)
})

// :bookId shown over here is path variable
router.get("/:bookid", async (req, res) => {
    const { bookid } = req.params;
    const book = await Book.findById(bookid)
    if (!book) {
        res.status(400).send({ err: "Invalid bookid" })
    }
    res.send(book)
})

router.delete("/:bookid", async (req, res) => {
    const { bookid } = req.params;
    const book = await Book.findByIdAndDelete(bookid)
    if (!book) {
        return res.status(400).send({ err: "Invalid bookid" })
    } else {
        return res.status(204).send()
    }
})

router.put("/:bookid", async (req, res) => {
    const { bookid } = req.params;
    const bookBody = req.body
    const newBook = await Book.findByIdAndUpdate(bookid, bookBody, { new: true })
    if (!newBook) {
        return res.status(400).send({ err: "Invalid bookid" })
    } else {
        return res.send(newBook)
    }
})

module.exports = {
    BookRouter: router
}