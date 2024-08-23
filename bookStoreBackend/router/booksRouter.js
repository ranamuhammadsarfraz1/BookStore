const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookController");

// Get all books
router.get("/getBooks", bookController.getBooks);

// Add a new book
router.post("/addBook", bookController.addBook);

module.exports = router;
