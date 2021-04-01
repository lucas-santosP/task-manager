import React from "react";
import { useTemplateContext } from "../../contexts/templates";
import { useUserContext } from "../../contexts/user";
import { PageContainer } from "../../styles/shared";

const Home: React.FC = () => {
  const { user } = useUserContext();
  const { templates } = useTemplateContext();

  return (
    <PageContainer>
      <h1>Home</h1>

      <p>{user?.name}</p>

      <h3>Templates</h3>
      <ul>
        {templates.map((template) => (
          <li key={template._id}>{template.title}</li>
        ))}
      </ul>
    </PageContainer>
  );
};

export default Home;
