import React, { useEffect, useState } from "react";
import axios from "axios";
import AddBook from "./AddBook";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/books/getBooks"
        );
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter books based on the search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1>Book List</h1>
      <AddBook />
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book._id}>
            {book.title} - ${book.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BookList;
