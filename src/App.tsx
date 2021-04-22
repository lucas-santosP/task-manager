import React from "react";
import { useSharedContext } from "./contexts/shared";
import { LoadingView } from "./components/layout";
import Routes from "./Routes";

const App: React.FC = () => {
  const { isLoading } = useSharedContext();

  if (isLoading) return <LoadingView />;
  return <Routes />;
};

export default App;
