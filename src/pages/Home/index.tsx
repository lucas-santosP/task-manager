import React from "react";
import { useStore } from "../../store";
import { PageContainer } from "../../styles/shared";

const Home: React.FC = () => {
  const { user } = useStore();

  return (
    <PageContainer>
      <h1>Home</h1>

      <p>{user?.name}</p>
    </PageContainer>
  );
};

export default Home;
