import React from "react";
import { ContainerKanban } from "./styles";
import { useKanbanContext } from "../../../contexts/kanban";
import KanbanColumn from "./KanbanColumn";

const Kanban: React.FC = () => {
  const { tasksTodo, tasksDoing, tasksDone } = useKanbanContext();

  return (
    <ContainerKanban>
      <KanbanColumn variant="red" status="to do" tasks={tasksTodo} />
      <KanbanColumn variant="green" status="doing" tasks={tasksDoing} />
      <KanbanColumn variant="blue" status="done" tasks={tasksDone} />
    </ContainerKanban>
  );
};

export default Kanban;
