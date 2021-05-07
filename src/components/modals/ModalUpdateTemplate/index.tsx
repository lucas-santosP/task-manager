import React, { ChangeEvent, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Form, Input, Modal, ModalRef, TextArea } from "../../../components/ui";
import store from "../../../store";
import { ITemplate } from "../../../types/template";

interface IProps {
  template: ITemplate | null;
  setTemplate: React.Dispatch<React.SetStateAction<ITemplate | null>>;
}

const ModalUpdateTemplate: React.ForwardRefRenderFunction<ModalRef, IProps> = (props, ref) => {
  const { template, setTemplate } = props;
  const { templateStore } = store;
  if (!template) return null;

  const [templateForm, setTemplateForm] = useState(template);
  const refModal = useRef<ModalRef>(null);

  function handleUpdateTemplateForm(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { value, name } = event.target;
    setTemplateForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmitUpdate() {
    try {
      if (!template) throw new Error("Invalid current templated");

      await templateStore.updateTemplate(templateForm);
      setTemplateForm(template);
      refModal.current?.setVisibility(false);
    } catch (error) {
      alert(error?.response?.data || error?.message);
    }
  }

  useEffect(() => {
    if (template) setTemplateForm(template);
  }, [template]);

  useImperativeHandle(ref, () => {
    return {
      setVisibility: (newValue) => {
        if (template) setTemplateForm(template);
        refModal.current?.setVisibility(newValue);
      },
    };
  });

  return (
    <Modal ref={refModal} title="Edit Template" onClose={() => setTemplate(null)}>
      <Form onSubmit={handleSubmitUpdate} buttonText={"Update"}>
        <Input
          autoComplete="off"
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
  );
};

export default React.forwardRef(ModalUpdateTemplate);
