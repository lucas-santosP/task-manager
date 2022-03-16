import React, { useImperativeHandle, useMemo, useRef, useState } from "react";
import { Alert, Button, Form, Input, Modal, ModalRef } from "../../../components/ui";
import { useLocation } from "wouter";
import { ITemplate } from "../../../types/template";
import store from "../../../store";
import { waitAsync } from "../../../utils";

interface IProps {
  template: ITemplate | null;
  setTemplate: React.Dispatch<React.SetStateAction<ITemplate | null>>;
  redirectOnDelete?: boolean;
}

const ModalDeleteTemplate: React.ForwardRefRenderFunction<ModalRef, IProps> = (props, ref) => {
  const { template, setTemplate, redirectOnDelete = false } = props;
  const { templateStore } = store;
  if (!template) return null;

  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [confirmDeletion, setConfirmDeletion] = useState("");
  const refModal = useRef<ModalRef>(null);

  async function handleSubmitForm() {
    try {
      if (!template) throw new Error("Invalid current templated");

      setIsLoading(true);
      await templateStore.deleteTemplate({ templateId: template._id });
      await waitAsync(1000);
      setIsLoading(false);
      if (redirectOnDelete) setLocation("/home", { replace: true });
      else refModal.current?.setVisibility(false);
    } catch (error) {
      alert(error?.response?.data || error?.message);
      setIsLoading(false);
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
      <Form onSubmit={handleSubmitForm} buttonIsDisable={!confirmDeleteIsValid}>
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
        <Button
          type="submit"
          variant="red"
          paddingLg
          disabled={!confirmDeleteIsValid}
          isLoading={isLoading}
        >
          Delete
        </Button>
      </Form>
    </Modal>
  );
};

export default React.forwardRef(ModalDeleteTemplate);
