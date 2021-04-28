//React
import React, { useState, useEffect } from "react";
//API requests
import axios from "../../axios/axios";
//Youtube
import Youtube from "react-youtube";
//Styles
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [button, setButton] = useState(true);

  const APIKEY = "fc700728a18cda64e804f048540489df";

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/discover/tv?api_key=${APIKEY}&with_networks=213`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  //Make the description short with "..." at the end
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      setButton(!button);
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie}/videos?api_key=${APIKEY}`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
      setButton(!button);
    }
  };

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
                  "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
              )`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button
              className="banner_button"
              onClick={() => handleClick(movie.id)}
            >
              {button ? "Play Trailer" : "Close Trailer"}
            </button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner_fadeBottom"></div>
      </header>
      <div className="trailer-container">
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Banner;
