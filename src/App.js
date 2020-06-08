import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Card from "./components/Card";
import SecDec from "./components/SecDec";
import Code from "./components/Code";
import Analysis from "./components/Analysis";

import GitCorner from "./components/GitCorner";

export default function App() {
  return (
    <div className="bg">
      <Router>
        <NavBar />
        <Card>
          <Switch>
            <Route exact path="/sec-dec">
              <SecDec />
            </Route>
            <Route exact path="/encode-decode">
              <Code />
            </Route>
            <Route exact path="/analysis">
              <Analysis />
            </Route>
            <Redirect to="/sec-dec" />
          </Switch>
        </Card>
        <GitCorner />
      </Router>
    </div>
  );
}
