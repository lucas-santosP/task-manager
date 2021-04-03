import React, { useEffect } from "react";
import { useTemplateContext } from "./contexts/templates";
import { setAPIAuthHeader } from "./services/api";
import { useUserContext } from "./contexts/user";
import Routes from "./Routes";

const App: React.FC = () => {
  const { token } = useUserContext();
  const { fetchTemplates } = useTemplateContext();

  useEffect(() => {
    if (token) {
      setAPIAuthHeader(token);
      fetchTemplates();
    }
  }, [token]);

  return <Routes />;
};

export default App;
