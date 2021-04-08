import React from "react";
import { PageContainer, PageTitle } from "../../styles/shared";
import { Section, SectionTitle } from "./styles";
import { AppendButtonAdd } from "../../components/ui";
import TemplateList from "./TemplatesList";
import LatestTaskList from "./LatestTasksList";

const Home: React.FC = () => {
  return (
    <PageContainer>
      <PageTitle>Home</PageTitle>
      <Section>
        <SectionTitle>Latest Tasks</SectionTitle>
        <LatestTaskList />
      </Section>

      <Section style={{ marginBottom: "2rem" }}>
        <SectionTitle>Your Templates</SectionTitle>
        <TemplateList />
      </Section>
      <AppendButtonAdd text="Create new Template" onClick={() => console.log("click")} />
    </PageContainer>
  );
};

export default Home;
