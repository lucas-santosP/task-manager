import React, { useEffect } from "react";
import store from "./store";
import { observer } from "mobx-react";
import { LoadingView } from "./components/layout";
import Routes from "./Routes";

const App: React.FC = () => {
  useEffect(() => {
    store.userStore.checkUserAuth();
  }, []);

  useEffect(() => {
    if (store.userStore.token) {
      store.templateStore.fetchTemplates(store.userStore.token);
    }
  }, [store.userStore.token]);

  if (store.isLoading) return <LoadingView />;
  return <Routes />;
};

export default observer(App);
