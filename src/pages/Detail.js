//React
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//Youtube
import Youtube from "react-youtube";

//Axios
import axios from "../axios/axios";

const key = "fc700728a18cda64e804f048540489df";

const Detail = () => {
  const [trailerUrl, setTrailerUrl] = useState("");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [movieId] = useState(searchParams.get("detail"));
  const [movieDetails, setMovieDetails] = useState({});
  const [button, setButton] = useState(true);

  useEffect(() => {
    (async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setMovieDetails(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [movieId]);

  const opts = {
    height: "600",
    width: "90%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movieDetails) => {
    if (trailerUrl) {
      setTrailerUrl("");
      setButton(!button);
    } else {
      let trailerurl = await axios.get(
        `/movie/${movieDetails}/videos?api_key=${key}`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
      setButton(!button);
    }
  };

  return (
    <div className="detail-container">
      <header
        className="detail-image"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="detail-contents">
          <h1 className="detail-title">
            {movieDetails?.title ||
              movieDetails?.name ||
              movieDetails?.original_name}
          </h1>
          <button
            className="detail-button"
            onClick={() => handleClick(movieDetails.id)}
          >
            {button ? "Play Trailer" : "Close Trailer"}
          </button>
        </div>
        <div className="banner_fadeBottom"></div>
      </header>
      <div className="other-container">
        <div className="movie-description-container">
          <h1>Movie Description</h1>
          <h2 className="detail-description">{movieDetails.overview}</h2>
        </div>
        <div className="other-details">
          <h1>More info about this movie</h1>
          <p>RELEASE DATE: {movieDetails.release_date}</p>
          <p>RATING: {movieDetails.vote_average}</p>
          <p>GENRES: </p>
          {movieDetails.genres &&
            movieDetails.genres.map((gen) => (
              <li className="genres-list" key={gen.name}>
                {gen.name}
              </li>
            ))}
        </div>
      </div>
      <div className="trailer-container">
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Detail;
