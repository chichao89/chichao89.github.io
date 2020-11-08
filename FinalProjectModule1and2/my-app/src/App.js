//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.scss";

import Layout from "./Components/Layout";
import NavigationBar from "./Components/NavigationBar";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Story from "./Components/Story";
import Coffee from "./Components/Coffee";
import Locate from "./Components/Locate";
import Jumbotron from "./Components/Jumbotron"
function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path="/" component={Coffee} />
            <Route path="/OurStory" component={Story} />
            <Route path="/Coffee" component={Coffee} />
            <Route path="/Locate" component={Locate} />
          </Switch>
        </Layout>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
