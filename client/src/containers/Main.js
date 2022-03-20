import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../portfolio.js";
import Loading from "./../pages/Loading/Loading";
import ReactGA from "react-ga";

export default function Main(propss, props) {
  useEffect(() => {
    ReactGA.initialize("UA-223402542-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Router basename="/">
      <Switch>
        {routes.map((route, idx) => (
          <Route exact key={idx} path={route.path}>
            <Loading
              {...props}
              theme={propss.theme}
              setTheme={propss.setTheme}
            />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
