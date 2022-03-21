import React, { ChangeEvent, useEffect, useImperativeHandle, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, Input, Modal, ModalRef, TextArea } from "../../../components/ui";
import store from "../../../store";
import { ITemplate } from "../../../types/template";
import { getApiErrorMessage } from "../../../utils/getApiErrorMessage";

interface IProps {
  template: ITemplate | null;
  setTemplate: React.Dispatch<React.SetStateAction<ITemplate | null>>;
}

const ModalUpdateTemplate: React.ForwardRefRenderFunction<ModalRef, IProps> = (props, ref) => {
  const { template, setTemplate } = props;
  if (!template) return null;

  const [templateForm, setTemplateForm] = useState(template);
  const [isLoading, setIsLoading] = useState(false);
  const refModal = useRef<ModalRef>(null);

  function handleUpdateTemplateForm(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { value, name } = event.target;
    setTemplateForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmitForm() {
    try {
      if (!template) throw new Error("Invalid current templated");

      setIsLoading(true);
      await store.templateStore.updateTemplate(templateForm);
      setIsLoading(false);
      refModal.current?.setVisibility(false);
      setTemplateForm(template);
    } catch (error) {
      const errorMsg = getApiErrorMessage(error);
      toast.error(errorMsg);
      setIsLoading(false);
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
      <Form onSubmit={handleSubmitForm}>
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
        <Button type="submit" variant="green" paddingLg isLoading={isLoading}>
          Update
        </Button>
      </Form>
    </Modal>
  );
};

export default React.forwardRef(ModalUpdateTemplate);
