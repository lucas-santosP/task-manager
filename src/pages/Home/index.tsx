import React from "react";
import { useUserContext } from "../../contexts/user";
import { PageContainer } from "../../styles/shared";

const Home: React.FC = () => {
  const { user } = useUserContext();

  return (
    <PageContainer>
      <h1>Home</h1>

      <p>{user?.name}</p>
    </PageContainer>
  );
};

export default Home;
