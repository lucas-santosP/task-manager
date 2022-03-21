import React, { useEffect, useRef, useState } from "react";
import { TitleIconsContainer, Description } from "./styles";
import { PageContainer, PageTitle } from "../../styles/shared";
import { ModalRef, Popover } from "../../components/ui";
import { ModalDeleteTemplate, ModalUpdateTemplate } from "../../components/modals";
import { HiDotsHorizontal } from "react-icons/hi";
import { observer } from "mobx-react";
import store from "../../store";
import Kanban from "./Kanban";
import { ITemplate } from "../../types/template";

interface IProps {
  templateId: string;
}

const TemplateTasks: React.FC<IProps> = (props) => {
  const { templateId } = props;

  const [pending, setPending] = useState(true);
  const refModalUpdate = useRef<ModalRef>(null);
  const refModalDelete = useRef<ModalRef>(null);
  const [templateToUpdate, setTemplateToUpdate] = useState<ITemplate | null>(null);
  const [templateToDelete, setTemplateToDelete] = useState<ITemplate | null>(null);

  useEffect(() => {
    const templateFound = store.templateStore.templates.find(
      (template) => template._id === templateId
    );
    if (templateFound) store.templateStore.setCurrentTemplate(templateFound);
    setPending(false);
  }, [store.templateStore.templates]);

  useEffect(() => {
    if (templateToUpdate) refModalUpdate.current?.setVisibility(true);
  }, [templateToUpdate]);

  useEffect(() => {
    if (templateToDelete) refModalDelete.current?.setVisibility(true);
  }, [templateToDelete]);

  const popoverOptions = [
    { content: "Edit", onClick: () => setTemplateToUpdate(store.templateStore.currentTemplate) },
    { content: "Delete", onClick: () => setTemplateToDelete(store.templateStore.currentTemplate) },
  ];

  if (pending) return null;
  if (!store.templateStore.currentTemplate) return <span>Template not found</span>;

  return (
    <PageContainer>
      <PageTitle>
        <TitleIconsContainer>
          {store.templateStore.currentTemplate.name}

          <Popover
            className="icon"
            title="Delete Template"
            content={<HiDotsHorizontal />}
            options={popoverOptions}
          />
        </TitleIconsContainer>
      </PageTitle>

      <Description>Description: {store.templateStore.currentTemplate.description}</Description>

      <Kanban />

      <ModalUpdateTemplate
        ref={refModalUpdate}
        template={templateToUpdate}
        setTemplate={setTemplateToUpdate}
      />
      <ModalDeleteTemplate
        ref={refModalDelete}
        template={templateToDelete}
        setTemplate={setTemplateToDelete}
        redirectOnDelete
      />
    </PageContainer>
  );
};

export default observer(TemplateTasks);
