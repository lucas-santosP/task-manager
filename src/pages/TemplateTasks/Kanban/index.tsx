import React from "react";
import { ContainerKanban } from "./styles";
import KanbanColumn from "./KanbanColumn";
import { observer } from "mobx-react";
import store from "../../../store";

const Kanban: React.FC = () => {
  if (!store.templateStore.tasksSegregated) return null;
  return (
    <ContainerKanban>
      <KanbanColumn
        variant="red"
        status="to do"
        tasks={store.templateStore.tasksSegregated.tasksTodo}
      />
      <KanbanColumn
        variant="green"
        status="doing"
        tasks={store.templateStore.tasksSegregated.tasksDoing}
      />
      <KanbanColumn
        variant="blue"
        status="done"
        tasks={store.templateStore.tasksSegregated.tasksDone}
      />
    </ContainerKanban>
  );
};

export default observer(Kanban);
