import React from "react";
import { StyledList } from "./styles";
import { useTaskContext } from "../../../contexts/tasks";
import { normalizeDateString } from "../../../utils";

const LatestTaskList: React.FC = () => {
  const { latestTasks } = useTaskContext();

  return (
    <StyledList>
      {!latestTasks.length && <span>No Tasks added recently.</span>}

      {latestTasks.map((task) => (
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

export default LatestTaskList;
