import React from "react";
import { StyledList } from "./styles";
import { useTemplateContext } from "../../../contexts/templates";
import { normalizeDateString } from "../../../utils";

const LatestTaskList: React.FC = () => {
  const { latestTasks } = useTemplateContext();

  return (
    <StyledList>
      {!latestTasks.length && <span>No Tasks added recently.</span>}

      {latestTasks.map((task) => (
        <li key={task._id}>
          <span className="name" title={task.name}>
            {task.name}
          </span>

          <small className="last-update">Last update: {normalizeDateString(task.updatedAt)}</small>
        </li>
      ))}
    </StyledList>
  );
};

export default LatestTaskList;
