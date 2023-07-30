import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movie data from the server
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/movieList",
          {
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
          }
        );
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="movie-list-container">
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>{movie.movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
