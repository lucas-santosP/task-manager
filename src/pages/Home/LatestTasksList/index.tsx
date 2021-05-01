import React from "react";
import { StyledList } from "./styles";
import store from "../../../store";
import { observer } from "mobx-react";
import { normalizeDateString } from "../../../utils";

const LatestTaskList: React.FC = () => {
  return (
    <StyledList>
      {!store.templateStore.latestTasks.length && <span>No Tasks added recently.</span>}
      {store.templateStore.latestTasks.map((task) => (
        <li key={task._id}>
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
