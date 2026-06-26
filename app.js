const express = require("express");
const getBooks = require("./services/booksService");

const app = express();
const PORT = process.env.PORT ?? 9000;

// Parse incoming JSON request bodies
app.use(express.json());

// GET /books endpoint
app.get("/books", (req, res) => {
  res.json(getBooks());
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
