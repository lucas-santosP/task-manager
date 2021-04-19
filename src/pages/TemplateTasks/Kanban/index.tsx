import React, { useMemo } from "react";
import { ContainerKanban } from "./styles";
import KanbanColumn from "./KanbanColumn";
import { ITemplate } from "../../../types/template";

interface IProps {
  template: ITemplate;
}

const Kanban: React.FC<IProps> = (props) => {
  const { template } = props;

  const tasksSegregated = useMemo(() => {
    return {
      onTodo: template.tasks.filter((task) => task.status === "to do"),
      onDoing: template.tasks.filter((task) => task.status === "doing"),
      onDone: template.tasks.filter((task) => task.status === "done"),
    };
  }, [template]);

  return (
    <ContainerKanban>
      <KanbanColumn
        variant="red"
        status="to do"
        templateId={template._id}
        tasks={tasksSegregated.onTodo}
      />
      <KanbanColumn
        variant="green"
        status="doing"
        templateId={template._id}
        tasks={tasksSegregated.onDoing}
      />
      <KanbanColumn
        variant="blue"
        status="done"
        templateId={template._id}
        tasks={tasksSegregated.onDone}
      />
    </ContainerKanban>
  );
};

export default Kanban;
