import axios from "axios";
import { useState } from "react";

const AddBook = () => {
  const [bookTitle, setBookTitle] = useState([]);
  const [bookPrice, setBookPrice] = useState([]);

  const handleTitleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setBookPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/books/addBook",
        {
          title: bookTitle,
          price: bookPrice,
        }
      );
      console.log("Book added:", response.data);
      // Clear the form or handle success
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={bookTitle}
        onChange={handleTitleChange}
        placeholder="Book Title"
      />
      <input
        type="number"
        value={bookPrice}
        onChange={handlePriceChange}
        placeholder="Book Price"
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
