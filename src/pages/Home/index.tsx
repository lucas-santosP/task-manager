import React, { ChangeEvent, useRef, useState } from "react";
import { GridSections, Section, SectionTitle } from "./styles";
import { PageContainer, PageTitle } from "../../styles/shared";
import {
  Modal,
  ModalRef,
  Form,
  Input,
  TextArea,
  AppendButtonAdd,
  Alert,
} from "../../components/ui";
import store from "../../store";
import TemplatesList from "./TemplatesList";
import LatestTasksList from "./LatestTasksList";
import { observer } from "mobx-react";

const initialTemplateForm = { name: "", description: "" };

const Home: React.FC = () => {
  const { templateStore, userStore } = store;

  const [templateForm, setTemplateForm] = useState(initialTemplateForm);
  const modalRef = useRef<ModalRef>(null);

  function handleUpdateTemplateForm(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { value, name } = e.target;
    setTemplateForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmitTemplateForm() {
    try {
      await templateStore.createTemplate(templateForm);
      setTemplateForm(initialTemplateForm);
      modalRef.current?.setVisibility(false);
    } catch (error) {
      alert(error?.response?.data);
    }
  }

  return (
    <PageContainer>
      <PageTitle>Home</PageTitle>

      <Alert>
        Hello <b>{userStore.user?.name}</b>, here you can access all your projects, edit, delete and
        create new ones.
      </Alert>

      <GridSections>
        <Section>
          <SectionTitle>My Projects</SectionTitle>
          <TemplatesList />
        </Section>

        <Section>
          <SectionTitle align="center">Latests tasks edited</SectionTitle>
          <LatestTasksList />
        </Section>
      </GridSections>

      <AppendButtonAdd
        text="Create new Project"
        onClick={() => modalRef.current?.setVisibility(true)}
      />

      <Modal ref={modalRef} title="New Project" maxWidth="500">
        <Form onSubmit={handleSubmitTemplateForm} buttonText={"Create"}>
          <Input
            focused
            label="Name"
            name="name"
            placeholder="Ex: Daily"
            value={templateForm.name}
            onChange={handleUpdateTemplateForm}
          />

          <TextArea
            label="Description"
            name="description"
            placeholder="Ex: Tasks to do every day"
            value={templateForm.description}
            onChange={handleUpdateTemplateForm}
          />
        </Form>
      </Modal>
    </PageContainer>
  );
};

export default observer(Home);
