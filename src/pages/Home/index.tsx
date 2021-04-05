import React from "react";
import { useTemplateContext } from "../../contexts/templates";
import { useUserContext } from "../../contexts/user";
import { PageContainer } from "../../styles/shared";
import TemplateList from "./TemplatesList";

const Home: React.FC = () => {
  const { user } = useUserContext();
  const { templates } = useTemplateContext();

  return (
    <PageContainer>
      <h1>Home</h1>

      <p>Hello {user?.name} !</p>

      <TemplateList templates={templates} />
    </PageContainer>
  );
};

export default Home;
