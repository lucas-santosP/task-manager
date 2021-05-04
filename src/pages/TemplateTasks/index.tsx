import React, { useEffect, useRef, useState } from "react";
import { TitleIconsContainer, Description } from "./styles";
import { PageContainer, PageTitle } from "../../styles/shared";
import { ModalRef, Popover } from "../../components/ui";
import { HiDotsHorizontal } from "react-icons/hi";
import { observer } from "mobx-react";
import store from "../../store";
import Kanban from "./Kanban";
import ModalUpdateTemplate from "./ModalUpdateTemplate";
import ModalDeleteTemplate from "./ModalDeleteTemplate";

interface IProps {
  templateId: string;
}

const TemplateTasks: React.FC<IProps> = (props) => {
  const { templateId } = props;
  const { templateStore } = store;

  const [pending, setPending] = useState(true);
  const refModalUpdate = useRef<ModalRef>(null);
  const refModalDelete = useRef<ModalRef>(null);

  useEffect(() => {
    const templateFound = templateStore.templates.find((template) => template._id === templateId);
    if (templateFound) templateStore.setCurrentTemplate(templateFound);
    setPending(false);
  }, [templateStore.templates]);

  if (pending) return null;
  if (!templateStore.currentTemplate) return <span>Template not found</span>;

  return (
    <PageContainer>
      <PageTitle>
        <TitleIconsContainer>
          {templateStore.currentTemplate.name}

          <Popover
            className="icon"
            title="Delete Template"
            content={<HiDotsHorizontal />}
            options={[
              {
                content: "Edit",
                onClick: () => refModalUpdate.current?.setVisibility(true),
              },
              {
                content: "Delete",
                onClick: () => refModalDelete.current?.setVisibility(true),
              },
            ]}
          />
        </TitleIconsContainer>
      </PageTitle>

      <Description>Description: {templateStore.currentTemplate.description}</Description>

      <Kanban />
      <ModalUpdateTemplate ref={refModalUpdate} />
      <ModalDeleteTemplate ref={refModalDelete} />
    </PageContainer>
  );
};

export default observer(TemplateTasks);
