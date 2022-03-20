import React, { useEffect, useRef, useState } from "react";
import {
  TaskList,
  TaskItem,
  HeaderTaskItem,
  MainTaskItem,
  FooterTaskItem,
  DeleteIcon,
  EditIcon,
  ClockIcon,
  TasksIcon,
} from "./styles";
import useLocation from "wouter/use-location";
import { observer } from "mobx-react";
import { ModalUpdateTemplate, ModalDeleteTemplate } from "../../../components/modals";
import { ModalRef } from "../../../components/ui";
import { normalizeDateString } from "../../../utils";
import { ITemplate } from "../../../types/template";
import { useStore } from "../../../store/StoreProvider";

const TemplateList: React.FC = () => {
  const store = useStore();
  const [, setLocation] = useLocation();
  const refModalDelete = useRef<ModalRef>(null);
  const refModalUpdate = useRef<ModalRef>(null);
  const [templateToUpdate, setTemplateToUpdate] = useState<ITemplate | null>(null);
  const [templateToDelete, setTemplateToDelete] = useState<ITemplate | null>(null);

  useEffect(() => {
    if (templateToUpdate) refModalUpdate.current?.setVisibility(true);
  }, [templateToUpdate]);

  useEffect(() => {
    if (templateToDelete) refModalDelete.current?.setVisibility(true);
  }, [templateToDelete]);

  if (!store.templateStore.templates.length) return <span>No Templates found.</span>;

  return (
    <TaskList>
      {store.templateStore.templates.map((template) => (
        <TaskItem key={template._id} onClick={() => setLocation(`template/${template._id}`)}>
          <HeaderTaskItem>
            <div className="row-icons">
              <EditIcon
                title="Edit project"
                onClick={(e) => {
                  e.stopPropagation();
                  setTemplateToUpdate({ ...template });
                }}
              />
              <DeleteIcon
                title="Delete project"
                onClick={(e) => {
                  e.stopPropagation();
                  setTemplateToDelete({ ...template });
                }}
              />
            </div>

            <span className="title" title={template.name}>
              {template.name}
            </span>
          </HeaderTaskItem>

          <MainTaskItem>
            <p className="description" title={template.description}>
              {template.description}
            </p>
          </MainTaskItem>

          <FooterTaskItem>
            <span className="tasks-count">
              <TasksIcon /> Tasks: {template.tasks.length}
            </span>
            <span className="last-update">
              <ClockIcon /> Last update: {normalizeDateString(template.updatedAt)}
            </span>
          </FooterTaskItem>
        </TaskItem>
      ))}

      <ModalUpdateTemplate
        ref={refModalUpdate}
        template={templateToUpdate}
        setTemplate={setTemplateToUpdate}
      />
      <ModalDeleteTemplate
        ref={refModalDelete}
        template={templateToDelete}
        setTemplate={setTemplateToDelete}
      />
    </TaskList>
  );
};

export default observer(TemplateList);
