import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
