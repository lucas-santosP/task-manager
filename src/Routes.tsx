import React, { Suspense } from "react";
import { Switch, Redirect, Route, Router } from "wouter";
import { BaseLayout, GridLayout, LoadingView } from "./components/layout";
import { waitAsync } from "./utils";
import Login from "./pages/Login";
import { useStore } from "./store";

const Home = React.lazy(async () => {
  await waitAsync(700);
  return import("./pages/Home");
});

const Profile = React.lazy(async () => {
  await waitAsync(700);
  return import("./pages/Profile");
});

const Routes: React.FC = () => {
  const { user } = useStore();

  return (
    <Router>
      {user ? (
        <GridLayout>
          <Suspense fallback={<LoadingView />}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} />
              <Redirect to="/home" />
            </Switch>
          </Suspense>
        </GridLayout>
      ) : (
        <BaseLayout>
          <Route path="/login" component={Login} />
        </BaseLayout>
      )}

      <Redirect to="/login" />
    </Router>
  );
};

export default Routes;
