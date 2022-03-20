import React from "react";
import { StyledList } from "./styles";

import { observer } from "mobx-react";
import { normalizeDateString } from "../../../utils";
import { useStore } from "../../../store/StoreProvider";
import { useLocation } from "wouter";

const LatestTaskList: React.FC = () => {
  const store = useStore();
  const [, setLocation] = useLocation();

  return (
    <StyledList>
      {!store.templateStore.latestTasks.length && <span>No Tasks added recently.</span>}
      {store.templateStore.latestTasks.map((task) => (
        <li
          key={task._id + task.templateId}
          title="Ir para a tarefa"
          onClick={() => setLocation("/template/" + task.templateId)}
        >
          <span className="name" title={task.name}>
            {task.name}
          </span>
          <small className="last-update">Created at: {normalizeDateString(task.createdAt)}</small>
        </li>
      ))}
    </StyledList>
  );
};

export default observer(LatestTaskList);
