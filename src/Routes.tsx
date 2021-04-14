import React, { Suspense } from "react";
import { Switch, Route, Router, Redirect } from "wouter";
import { BaseLayout, GridLayout, LoadingBar, LoadingView } from "./components/layout";
import { Login, Register, NotFound, Home, Profile, TemplateTasks } from "./pages";
import { useUserContext } from "./contexts/user";
import { useSharedContext } from "./contexts/shared";

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
