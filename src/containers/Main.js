import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../portfolio.js";
import Loading from "./../pages/Loading/Loading";

export default function Main(propss, props) {
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
