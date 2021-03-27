import React, { Suspense } from "react";
import { Switch, Redirect, Route, Router } from "wouter";
import { BaseLayout, GridLayout, LoadingBar } from "./components/layout";
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
  const { user, isLoading } = useStore();

  return (
    <Router>
      {isLoading ? (
        <LoadingBar />
      ) : (
        <>
          {user ? (
            <GridLayout>
              <Suspense fallback={<LoadingBar />}>
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/profile" component={Profile} />
                  <Redirect to="/home" />
                </Switch>
              </Suspense>
            </GridLayout>
          ) : (
            <BaseLayout>
              <Switch>
                <Route path="/login" component={Login} />
                <Redirect to="/login" />
              </Switch>
            </BaseLayout>
          )}
        </>
      )}
    </Router>
  );
};

export default Routes;
