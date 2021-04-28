//React
import React from "react";
import { useHistory } from "react-router-dom";
//Styles
import "./MovieSearch.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieSearch = ({ movie }) => {
  const { push, location } = useHistory();
  const { search } = location;

  const handleClick = () => {
    const newPath = `${search}&detail=${movie.id}`;
    push(`detail${newPath}`);
  };

  return (
    <div>
      {movie.backdrop_path && (
        <img
          key={movie.id}
          onClick={handleClick}
          className="movie"
          src={`${base_url}${movie.backdrop_path}`}
          alt={movie.name || movie.title}
        />
      )}
    </div>
  );
};

export default MovieSearch;
