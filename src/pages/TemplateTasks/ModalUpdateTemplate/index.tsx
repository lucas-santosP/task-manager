import React, { ChangeEvent, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Form, Input, Modal, ModalRef, TextArea } from "../../../components/ui";
import { observer } from "mobx-react";
import store from "../../../store";

const ModalUpdateTemplate: React.ForwardRefRenderFunction<ModalRef> = (_, ref) => {
  const { templateStore } = store;
  if (!templateStore.currentTemplate) return null;

  const [templateForm, setTemplateForm] = useState(templateStore.currentTemplate);
  const refModal = useRef<ModalRef>(null);

  function handleUpdateTemplateForm(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { value, name } = event.target;
    setTemplateForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmitUpdate() {
    try {
      if (!templateStore.currentTemplate) throw new Error("Invalid current templated");

      await templateStore.updateTemplate(templateForm);
      setTemplateForm(templateStore.currentTemplate);
      refModal.current?.setVisibility(false);
    } catch (error) {
      alert(error?.response?.data || error?.message);
    }
  }

  useEffect(() => {
    if (templateStore.currentTemplate) {
      setTemplateForm(templateStore.currentTemplate);
    }
  }, [templateStore.currentTemplate]);

  useImperativeHandle(ref, () => {
    return {
      setVisibility: (newValue) => {
        if (templateStore.currentTemplate) setTemplateForm(templateStore.currentTemplate);
        refModal.current?.setVisibility(newValue);
      },
    };
  });

  return (
    <Modal ref={refModal} title="Edit Template">
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

export default observer(React.forwardRef(ModalUpdateTemplate));
