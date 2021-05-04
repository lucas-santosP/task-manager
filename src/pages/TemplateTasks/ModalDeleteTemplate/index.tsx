import React, { useImperativeHandle, useMemo, useRef, useState } from "react";
import { Alert, Form, Input, Modal, ModalRef } from "../../../components/ui";
import { useLocation } from "wouter";
import { observer } from "mobx-react";
import store from "../../../store";

const ModalUpdateTemplate: React.ForwardRefRenderFunction<ModalRef> = (_, ref) => {
  const { templateStore } = store;
  if (!templateStore.currentTemplate) return null;

  const [, setLocation] = useLocation();
  const [confirmDeletion, setConfirmDeletion] = useState("");
  const refModal = useRef<ModalRef>(null);

  async function handleSubmitDelete() {
    try {
      if (!templateStore.currentTemplate) throw new Error("Invalid current templated");

      await templateStore.deleteTemplate({ templateId: templateStore.currentTemplate._id });
      setLocation("/");
    } catch (error) {
      alert(error?.response?.data || error?.message);
    }
  }

  const confirmDeleteIsValid = useMemo(
    () => confirmDeletion === templateStore.currentTemplate?.name,
    [confirmDeletion, templateStore.createTemplate]
  );

  useImperativeHandle(ref, () => {
    return {
      setVisibility: (newValue) => {
        setConfirmDeletion("");
        refModal.current?.setVisibility(newValue);
      },
    };
  });

  return (
    <Modal ref={refModal} title="Confirm deletion">
      <Form
        onSubmit={handleSubmitDelete}
        buttonIsDisable={!confirmDeleteIsValid}
        buttonText={"Delete"}
      >
        <Alert>
          This action <b>cannot</b> be undone.This will permanently delete the current template
          {templateStore.currentTemplate.tasks.length
            ? ` and its existence ${templateStore.currentTemplate.tasks.length} tasks`
            : ""}
          .
        </Alert>

        <Input
          autoComplete="off"
          label={
            <>
              Please type <b>{templateStore.currentTemplate.name}</b> to confirm:
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

export default observer(React.forwardRef(ModalUpdateTemplate));
