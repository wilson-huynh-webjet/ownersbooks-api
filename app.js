const express = require("express");
const cors = require("cors");
const getBooks = require("./services/booksService");

const app = express();
const PORT = process.env.PORT ?? 9000;

// Parse incoming JSON request bodies
app.use(express.json());

// Allow all origins in local but restrict to CORS_ORIGIN in production
app.use(cors({ origin: process.env.CORS_ORIGIN ?? "*" }));

// GET /books endpoint
app.get("/books", (req, res) => {
  res.json(getBooks());
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
