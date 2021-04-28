//React
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
//Style
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const [query, setQuery] = useState("");

  const { push } = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const searchMovies = () => {
    push(`/search?query=${query}`);
  };

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <Link to="/">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </Link>
      <form className="form" onSubmit={searchMovies}>
        <i class="fas fa-search fa-2x"></i>
        <input
          type="text"
          name="query"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input"
        ></input>
      </form>
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar Logo"
      />
    </div>
  );
}

export default Nav;
