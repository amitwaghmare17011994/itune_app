import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import { IntlWrapper } from "./i189/IntlWrapper";
import { LOCALES } from "./i189/locales";

export default function App() {
  return (
    <Router>
      <IntlWrapper locale={LOCALES.FRENCH}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </IntlWrapper>
    </Router>
  );
}
