//React
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//Component
import MovieSearch from "../components/movieSearch/MovieSearch";
import Pagination from "../components/pagination/Pagination";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  //State
  const [movies, setMovies] = useState([]);
  const [pagination, setPagination] = useState({});
  const [query] = useState(searchParams.get("query"));
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const key = "fc700728a18cda64e804f048540489df";
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=${page}&include_adult=false`;
      try {
        const response = await fetch(url);
        const {
          results,
          page,
          total_pages,
          total_results,
        } = await response.json();
        setMovies(results);
        setPagination({
          pageInfo: page,
          totalPages: total_pages,
          totalResults: total_results,
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, [query, page]);

  const changePage = (action) => {
    const newPage = action === "next" ? page + 1 : page - 1;
    setPage(newPage);
  };

  return (
    <div className="search-component">
      <div className="search-movies-component">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieSearch movie={movie} key={movie.id} />
          ))}
      </div>
      <Pagination pagination={pagination} changePage={changePage} />
    </div>
  );
};

export default Search;
