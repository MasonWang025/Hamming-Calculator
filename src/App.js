import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavBar from "./components/Navigation/NavBar";
import Card from "./components/utils/Card";
import SecDecPage from "./components/SEC-DED/SecDedPage";
import Code from "./components/Encode/Code";
import Analysis from "./components/Analysis/Analysis";

import GitCorner from "./components/Navigation/GitCorner";

export default function App() {
  return (
    <div className="bg">
      <Router>
        <NavBar />
        <Card>
          <Switch>
            <Route exact path="/sec-ded">
              <SecDecPage />
            </Route>
            <Route exact path="/encode">
              <Code />
            </Route>
            <Route exact path="/analysis">
              <Analysis />
            </Route>
            <Redirect to="/sec-ded" />
          </Switch>
        </Card>
        <GitCorner />
      </Router>
    </div>
  );
}
