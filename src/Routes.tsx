import React, { Suspense } from "react";
import { Switch, Route, Router, Redirect } from "wouter";
import { BaseLayout, GridLayout, LoadingBar, LoadingView } from "./components/layout";
import { waitAsync } from "./utils";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
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

const TemplateTasks = React.lazy(async () => {
  await waitAsync(700);
  return import("./pages/TemplateTasks");
});

const Routes: React.FC = () => {
  const { user } = useUserContext();
  const { isLoading } = useSharedContext();

  if (isLoading) return <LoadingView />;
  return (
    <Router>
      {user ? (
        <GridLayout>
          <Suspense fallback={<LoadingBar />}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/template/:id">
                {(params) => <TemplateTasks templateId={params.id} />}
              </Route>
              <Route path="/">
                <Redirect to="/home" />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </GridLayout>
      ) : (
        <BaseLayout>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </BaseLayout>
      )}
    </Router>
  );
};

export default Routes;
