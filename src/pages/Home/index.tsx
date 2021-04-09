import React, { useRef } from "react";
import { PageContainer, PageTitle } from "../../styles/shared";
import { Section, SectionTitle } from "./styles";
import { AppendButtonAdd } from "../../components/ui";
import { Modal, ModalRef } from "../../components/ui";
import TemplateList from "./TemplatesList";
import LatestTaskList from "./LatestTasksList";

const Home: React.FC = () => {
  const modalRef = useRef<ModalRef>(null);

  return (
    <PageContainer>
      <PageTitle>Home</PageTitle>

      <Modal ref={modalRef} title="New Template">
        Modal body
      </Modal>

      <Section>
        <SectionTitle>Latest Tasks</SectionTitle>
        <LatestTaskList />
      </Section>

      <Section style={{ marginBottom: "2rem" }}>
        <SectionTitle>Your Templates</SectionTitle>
        <TemplateList />
      </Section>

      <AppendButtonAdd
        text="Create new Template"
        onClick={() => modalRef.current?.setVisibility(true)}
      />
    </PageContainer>
  );
};

export default Home;
