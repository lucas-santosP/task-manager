import React, { useEffect } from "react";
import store from "./store";
import { useLocation } from "wouter";
import { observer } from "mobx-react";
import { LoadingView } from "./components/layout";
import Routes from "./Routes";

const App: React.FC = () => {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    store.userStore.checkUserAuth(location, setLocation).then(() => {
      store.setLoading(false);
    });
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
