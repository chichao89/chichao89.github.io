//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.scss";

import Layout from "./Components/Layout";
import NavigationBar from "./Components/NavigationBar";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop"
import Story from "./Components/Story";
import Coffee from "./Components/Coffee";
import Locate from "./Components/Locate";
import Jumbotron from "./Components/Jumbotron"
import Footer from "./Components/Footer"

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <NavigationBar />
        <Jumbotron />
        <Layout>
            <Route exact path="/" component={Coffee} />
            <Route path="/Story" component={Story} />
            <Route path="/Shop" component={Coffee} />
            <Route path="/Locate" component={Locate} />
        </Layout>
      </HashRouter>
          <Footer/>  
    </React.Fragment>
  );
}

export default App;
