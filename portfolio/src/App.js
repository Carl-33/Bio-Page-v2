import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/about-me"]} >
            <About />
          </Route>
          <Route exact path="/contact" >
            <Contact />
          </Route>
          <Route exact path="/portfolio" >
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
