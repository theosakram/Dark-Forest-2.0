import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Characters, Details } from "./pages";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "swiper/swiper-bundle.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/characters/:job" children={<Characters />} />
          <Route path="/details/:id" children={<Details />} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
