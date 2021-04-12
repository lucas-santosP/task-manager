import React, { useEffect, useMemo, useRef, useState } from "react";
import { TitleIconsContainer } from "./styles";
import { PageContainer, PageTitle } from "../../styles/shared";
import { Form, Alert, Input, Modal, ModalRef, Popover } from "../../components/ui";
import { HiDotsHorizontal } from "react-icons/hi";
import { useLocation } from "wouter";
import { useTemplateContext } from "../../contexts/templates";
import { ITemplate } from "../../types/template";

interface IProps {
  templateId: string;
}

const TemplateTasks: React.FC<IProps> = (props) => {
  const { templateId } = props;

  const { templates, updateTemplate, deleteTemplate } = useTemplateContext();
  const [, setLocation] = useLocation();
  const [template, setTemplate] = useState<ITemplate | null>(null);
  const [templateForm, setTemplateForm] = useState<ITemplate | null>(null);
  const [confirmDeletion, setConfirmDeletion] = useState("");

  const refModalEdit = useRef<ModalRef>(null);
  const refModalDelete = useRef<ModalRef>(null);

  const confirmDeleteIsValid = useMemo(() => {
    return confirmDeletion === template?.name;
  }, [confirmDeletion, template]);

  function handleUpdateTemplateForm(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setTemplateForm((prev) => {
      if (prev) return { ...prev, [name]: value };
      return null;
    });
  }

  async function handleSubmitUpdate() {
    if (!templateForm) return;

    try {
      await updateTemplate(templateForm);
      setTemplateForm(template);
      refModalEdit.current?.setVisibility(false);
    } catch (error) {
      alert(error?.response?.data);
    }
  }

  async function handleSubmitDelete() {
    if (!template) return;

    try {
      await deleteTemplate({ templateId: template._id });
      setLocation("/");
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    const templateFound = templates.find((template) => template._id === templateId) || null;
    setTemplate(templateFound);
    setTemplateForm(templateFound);
  }, [templates]);

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

      <p style={{ marginBottom: "2rem" }}>Description: {template.description}</p>

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

          <Input
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

export default TemplateTasks;
