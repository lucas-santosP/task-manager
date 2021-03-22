import React, { Suspense } from "react";
import { Switch, Redirect, Route, Router, Link, useLocation } from "wouter";
import { BaseLayout, GridLayout, LoadingView } from "./components/layout";
import { waitAsync } from "./utils";
import Login from "./pages/Login";

const Home = React.lazy(async () => {
  await waitAsync(700);
  return import("./pages/Home");
});

const Profile = React.lazy(async () => {
  await waitAsync(700);
  return import("./pages/Profile");
});

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
            <Suspense fallback={<LoadingView />}>
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} />
            </Suspense>
          </GridLayout>
        )}

        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default Routes;
