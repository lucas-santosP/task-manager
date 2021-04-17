import React, { useMemo } from "react";
import { ContainerKanban } from "./styles";
import KanbanColumn from "./KanbanColumn";
import { ITask } from "../../../types/task";

interface IProps {
  tasks: ITask[];
}

const Kanban: React.FC<IProps> = (props) => {
  const { tasks } = props;

  const tasksSegregated = useMemo(() => {
    return {
      onTodo: tasks.filter((task) => task.status === "to do"),
      onDoing: tasks.filter((task) => task.status === "doing"),
      onDone: tasks.filter((task) => task.status === "done"),
    };
  }, [tasks]);

  return (
    <ContainerKanban>
      <KanbanColumn title="To do" tasks={tasksSegregated.onTodo} variant="red" />
      <KanbanColumn title="Doing" tasks={tasksSegregated.onDoing} variant="green" />
      <KanbanColumn title="Done" tasks={tasksSegregated.onDone} variant="blue" />
    </ContainerKanban>
  );
};

export default Kanban;
