import React from "react";
import Banner from "../../components/banner/Banner";
import Row from "../../components/row/Row";
import requests from "../../requests/requests";

const Home = () => {
  return (
    <div>
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
