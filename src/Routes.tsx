import React, { Suspense } from "react";
import { Switch, Redirect, Route, Router } from "wouter";
import { BaseLayout, GridLayout, LoadingBar, LoadingView } from "./components/layout";
import { waitAsync } from "./utils";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useUserContext } from "./contexts/user";
import { useSharedContext } from "./contexts/shared";

const Home = React.lazy(async () => {
  await waitAsync(700);
  return import("./pages/Home");
});

const Profile = React.lazy(async () => {
  await waitAsync(700);
  return import("./pages/Profile");
});

const Routes: React.FC = () => {
  const { user } = useUserContext();
  const { isLoading } = useSharedContext();

  return (
    <Router>
      {isLoading ? (
        <LoadingView />
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
                <Route path="/register" component={Register} />
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
