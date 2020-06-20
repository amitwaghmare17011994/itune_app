import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import { IntlWrapper } from "./i189/IntlWrapper";
import { LOCALES } from "./i189/locales";
import { connect } from "react-redux";

export function App({ selectedLanguge = LOCALES.ENGLISH }) {
  console.log(selectedLanguge);
  
  return (
    <Router>
      <IntlWrapper locale={selectedLanguge}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </IntlWrapper>
    </Router>
  );
}

export default connect((state) => state.songs.selectedLanguge)(App);
