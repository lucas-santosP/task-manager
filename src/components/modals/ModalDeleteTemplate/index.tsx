import React, { useImperativeHandle, useMemo, useRef, useState } from "react";
import { Alert, Form, Input, Modal, ModalRef } from "../../../components/ui";
import { useLocation } from "wouter";
import { ITemplate } from "../../../types/template";
import store from "../../../store";

interface IProps {
  template: ITemplate | null;
  setTemplate: React.Dispatch<React.SetStateAction<ITemplate | null>>;
  redirectOnDelete?: boolean;
}

const ModalUpdateTemplate: React.ForwardRefRenderFunction<ModalRef, IProps> = (props, ref) => {
  const { template, setTemplate, redirectOnDelete = false } = props;
  const { templateStore } = store;
  if (!template) return null;

  const [, setLocation] = useLocation();
  const [confirmDeletion, setConfirmDeletion] = useState("");
  const refModal = useRef<ModalRef>(null);

  async function handleSubmitDelete() {
    try {
      if (!template) throw new Error("Invalid current templated");

      await templateStore.deleteTemplate({ templateId: template._id });
      refModal.current?.setVisibility(false);
      if (redirectOnDelete) setLocation("/", { replace: true });
    } catch (error) {
      alert(error?.response?.data || error?.message);
    }
  }

  const confirmDeleteIsValid = useMemo(() => confirmDeletion === template?.name, [
    confirmDeletion,
    templateStore.createTemplate,
  ]);

  useImperativeHandle(ref, () => {
    return {
      setVisibility: (newValue) => {
        setConfirmDeletion("");
        refModal.current?.setVisibility(newValue);
      },
    };
  });

  return (
    <Modal ref={refModal} title="Confirm deletion" onClose={() => setTemplate(null)}>
      <Form
        onSubmit={handleSubmitDelete}
        buttonIsDisable={!confirmDeleteIsValid}
        buttonText={"Delete"}
      >
        <Alert>
          This action <b>cannot be undone</b>.This will permanently delete the current template
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
  );
};

export default React.forwardRef(ModalUpdateTemplate);
