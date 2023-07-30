const express = require("express");
const axios = require("axios");

const app = express();
const port = 5000;

app.use(express.json());

app.post("/api/movieList", async (req, res) => {
  try {
    const { category, language, genre, sort } = req.body;
    const response = await axios.post("https://hoblist.com/api/movieList", {
      category,
      language,
      genre,
      sort,
    });
    const data = response.data.result;
    res.json(data);
  } catch (error) {
    console.error("Error fetching movie data:", error.message);
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
