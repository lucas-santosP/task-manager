import React from "react";
import { Switch, Route, Router, Redirect } from "wouter";
import { BaseLayout, GridLayout } from "./components/layout";
import { Login, Register, NotFound, Home, Profile, TemplateTasks } from "./pages";
import { observer } from "mobx-react";
import store from "./store";

const Routes: React.FC = () => {
  return (
    <Router base={process.env.NODE_ENV === "production" ? "/task-manager" : ""}>
      {store.userStore.user ? (
        <GridLayout>
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

export default observer(Routes);
