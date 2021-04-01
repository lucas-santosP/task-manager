import React, { useEffect, useState } from "react";
import { useTemplateContext } from "./contexts/templates";
import { useUserContext } from "./contexts/user";
import Routes from "./Routes";

const App: React.FC = () => {
  const { token } = useUserContext();
  const { fetchTemplates } = useTemplateContext();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (token) {
      setIsFetching(true);
      fetchTemplates().then(() => setIsFetching(false));
    }
  }, [token]);

  if (isFetching) return null;
  else return <Routes />;
};

export default App;
