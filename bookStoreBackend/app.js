const express = require("express");
const connectDB = require("./dbConnection/db");
const booksRouter = require("./router/booksRouter");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Use routes
app.use("/api/books", booksRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
