const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 9000;

// Parse incoming JSON request bodies
app.use(express.json());

// GET /books endpoint
app.get("/books", (req, res) => {
  res.json([]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
