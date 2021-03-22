import React, { Suspense } from "react";
import { Switch, Redirect, Route, Router, Link, useLocation } from "wouter";
import { BaseLayout, GridLayout } from "./components/layout";
import { Login, Profile, Home } from "./pages";

const pagesWithBaseLayout = ["/login", "/register"];

const Routes: React.FC = () => {
  const [currentLocation] = useLocation();

  return (
    <Router>
      <Switch>
        {pagesWithBaseLayout.includes(currentLocation) ? (
          <BaseLayout>
            <Route path="/login" component={Login} />
          </BaseLayout>
        ) : (
          <GridLayout>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} />

              <Link to="/profile">To profile</Link>
              <br />
              <br />
              <Link to="/login">To login</Link>
            </Suspense>
          </GridLayout>
        )}

        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default Routes;
