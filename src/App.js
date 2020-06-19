import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}
