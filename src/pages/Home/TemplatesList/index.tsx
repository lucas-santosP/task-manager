import React from "react";
import {
  TaskList,
  TaskItem,
  HeaderTaskItem,
  MainTaskItem,
  FooterTaskItem,
  DeleteIcon,
  EditIcon,
  ClockIcon,
  AnnotationIcon,
} from "./styles";
import { normalizeDateString } from "../../../utils";
import { observer } from "mobx-react";
import store from "../../../store";
import useLocation from "wouter/use-location";

const TemplateList: React.FC = () => {
  const [, setLocation] = useLocation();

  return (
    <TaskList>
      {!store.templateStore.templates.length && <span>No Templates found.</span>}

      {store.templateStore.templates.map((template) => (
        <TaskItem key={template._id} onClick={() => setLocation(`template/${template._id}`)}>
          <HeaderTaskItem>
            <div className="row-icons">
              <EditIcon
                className="edit-icon"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
              <DeleteIcon
                className="delete-icon"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
            </div>

            <span className="name" title={template.name}>
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
              <AnnotationIcon /> Tasks: {template.tasks.length}
            </span>
            <span className="last-update">
              <ClockIcon /> Last update: {normalizeDateString(template.updatedAt)}
            </span>
          </FooterTaskItem>
        </TaskItem>
      ))}
    </TaskList>
  );
};

export default observer(TemplateList);
