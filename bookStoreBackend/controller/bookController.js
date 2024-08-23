const Book = require("../models/Book");

// Controller to get all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to add a new book
const addBook = async (req, res) => {
  const book = new Book({ ...req.body });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getBooks,
  addBook,
};
