import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { observer } from "mobx-react";
import { TitleIconsContainer, Description } from "./styles";
import { PageContainer, PageTitle } from "../../styles/shared";
import { Form, Alert, Input, Modal, ModalRef, Popover, TextArea } from "../../components/ui";
import { HiDotsHorizontal } from "react-icons/hi";
import { useLocation } from "wouter";
import store from "../../store";
import { ITemplate } from "../../types/template";
import Kanban from "./Kanban";

interface IProps {
  templateId: string;
}

const TemplateTasks: React.FC<IProps> = (props) => {
  const { templateId } = props;

  const [, setLocation] = useLocation();
  const [template, setTemplate] = useState<ITemplate | null>(null);
  const [templateForm, setTemplateForm] = useState<ITemplate | null>(null);
  const [confirmDeletion, setConfirmDeletion] = useState("");

  const refModalEdit = useRef<ModalRef>(null);
  const refModalDelete = useRef<ModalRef>(null);

  const confirmDeleteIsValid = useMemo(() => {
    return confirmDeletion === template?.name;
  }, [confirmDeletion, template]);

  function handleUpdateTemplateForm(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { value, name } = event.target;
    setTemplateForm((prev) => {
      if (prev) return { ...prev, [name]: value };
      return null;
    });
  }

  async function handleSubmitUpdate() {
    if (!templateForm) return;

    try {
      await store.templateStore.updateTemplate(templateForm);
      setTemplateForm(template);
      refModalEdit.current?.setVisibility(false);
    } catch (error) {
      alert(error?.response?.data);
    }
  }

  async function handleSubmitDelete() {
    if (!template) return;

    try {
      await store.templateStore.deleteTemplate({ templateId: template._id });
      setLocation("/");
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    const templateFound = store.templateStore.templates.find(
      (template) => template._id === templateId
    );
    if (templateFound) {
      setTemplate(templateFound);
      setTemplateForm(templateFound);
      store.templateStore.setCurrentTemplate(templateFound);
    }
  }, [store.templateStore.templates]);

  if (!template) return <span>Template not found</span>;

  return (
    <PageContainer>
      <PageTitle>
        <TitleIconsContainer>
          {template.name}

          <Popover
            className="icon"
            title="Delete Template"
            content={<HiDotsHorizontal />}
            options={[
              {
                content: "Edit",
                onClick: () => refModalEdit.current?.setVisibility(true),
              },
              {
                content: "Delete",
                onClick: () => {
                  setConfirmDeletion("");
                  refModalDelete.current?.setVisibility(true);
                },
              },
            ]}
          />
        </TitleIconsContainer>
      </PageTitle>

      <Description>Description: {template.description}</Description>

      <Kanban />

      <Modal ref={refModalEdit} title="Edit Template">
        <Form onSubmit={handleSubmitUpdate} buttonText={"Update"}>
          <Input
            autoComplete="off"
            label="Name"
            name="name"
            placeholder="Ex: Daily"
            value={templateForm?.name}
            onChange={handleUpdateTemplateForm}
          />

          <TextArea
            label="Description"
            name="description"
            placeholder="Ex: Tasks to do every day"
            value={templateForm?.description}
            onChange={handleUpdateTemplateForm}
          />
        </Form>
      </Modal>

      <Modal ref={refModalDelete} title="Confirm deletion">
        <Form
          onSubmit={handleSubmitDelete}
          buttonIsDisable={!confirmDeleteIsValid}
          buttonText={"Delete"}
        >
          <Alert>
            This action <b>cannot</b> be undone.This will permanently delete the current template
            {template.tasks.length ? ` and its existence ${template.tasks.length} tasks` : ""}.
          </Alert>

          <Input
            autoComplete="off"
            label={
              <>
                Please type <b>{template.name}</b> to confirm:
              </>
            }
            name="name"
            value={confirmDeletion}
            onChange={(e) => setConfirmDeletion(e.target.value)}
          />
        </Form>
      </Modal>
    </PageContainer>
  );
};

export default observer(TemplateTasks);
