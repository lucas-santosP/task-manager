import React from "react";
import { Switch, Redirect, Route, Router } from "wouter";
import { Home, Login } from "./pages";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default Routes;
