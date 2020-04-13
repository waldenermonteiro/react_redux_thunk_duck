import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Joker from "./pages/joker/Joker";
import Home from "./pages/layouts/Home";
export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/jokers">Jokers</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/jokers">
              <Joker />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
