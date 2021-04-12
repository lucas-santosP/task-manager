import React, { useEffect, useRef, useState } from "react";
import { useTemplateContext } from "../../contexts/templates";
import { PageContainer, PageTitle } from "../../styles/shared";
import { ITemplate } from "../../types/template";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import { TitleIconsContainer } from "./styles";
import { Form, Input, Modal, ModalRef } from "../../components/ui";

interface IProps {
  templateId: string;
}

const TemplateTasks: React.FC<IProps> = (props) => {
  const { templateId } = props;
  const { templates, updateTemplate } = useTemplateContext();
  const [template, setTemplate] = useState<ITemplate | null>(null);
  const [templateForm, setTemplateForm] = useState<ITemplate | null>(null);
  const refModalEdit = useRef<ModalRef>(null);

  function handleUpdateTemplateForm(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setTemplateForm((prev) => {
      if (prev) return { ...prev, [name]: value };
      return null;
    });
  }

  async function handleSubmitTemplateForm() {
    try {
      if (!templateForm) return;

      await updateTemplate(templateForm);
      setTemplateForm(template);
      refModalEdit.current?.setVisibility(false);
    } catch (error) {
      alert(error?.response?.data);
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
          <span className="text">{template.name}</span>

          <HiOutlinePencilAlt
            title="Edit Template"
            className="icon edit"
            onClick={() => refModalEdit.current?.setVisibility(true)}
          />

          <HiOutlineTrash className="icon delete" title="Delete Template" />
        </TitleIconsContainer>
      </PageTitle>

      <p style={{ marginBottom: "2rem" }}>Description: {template.description}</p>

      <Modal ref={refModalEdit} title="Edit Template" maxWidth="500">
        <Form onSubmit={handleSubmitTemplateForm} buttonText={"Update"}>
          <Input
            focused
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
    </PageContainer>
  );
};

export default TemplateTasks;
