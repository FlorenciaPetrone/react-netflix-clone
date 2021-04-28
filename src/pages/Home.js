//React
import React from "react";
//Components
import Banner from "../components/banner/Banner";
import Row from "../components/row/Row";
//Requests
import requests from "../requests/requests";

const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      {requests.map((movie) => (
        <Row
          key={movie.title}
          title={movie.title}
          fetchUrl={movie.fetchUrl}
          isLargeRow={movie.isLargeRow}
        />
      ))}
    </div>
  );
};

export default Home;
