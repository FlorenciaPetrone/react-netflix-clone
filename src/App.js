import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/home";
import Search from "./pages/search";
import Detail from "./pages/detail";

import "./styles.css";

const App = () => {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
