import React from "react";
import { Section, ListTitle, StyledList } from "./styles";
import { useTemplateContext } from "../../../contexts/templates";
import { normalizeDateString } from "../../../utils";

const LatestTaskList: React.FC = () => {
  const { latestTasks } = useTemplateContext();

  return (
    <Section>
      <ListTitle>Latest Tasks</ListTitle>

      <StyledList>
        {latestTasks.map((task) => (
          <li key={task._id}>
            <span className="name" title={task.name}>
              {task.name}
            </span>

            <small className="last-update">
              Last update: {normalizeDateString(task.updatedAt)}
            </small>
          </li>
        ))}
      </StyledList>
    </Section>
  );
};

export default LatestTaskList;
