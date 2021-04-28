//React
import React from "react";
import { Switch, Route } from "react-router-dom";
//Components-Pages
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
//Styles
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/detail" component={Detail} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
