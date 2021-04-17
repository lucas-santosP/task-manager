import React, { useMemo } from "react";
import { ContainerKanbanColumn, Header, HeaderTitle, Badge, TasksList } from "./styles";
import TaskListItem from "../TaskListItem";
import { ITask } from "../../../../types/task";

type IVariant = "blue" | "green" | "red";

interface IProps {
  title: string;
  variant?: IVariant;
  tasks: ITask[];
}

type IBaseColors = {
  [key in IVariant]: string;
};

const baseColors: IBaseColors = {
  blue: "#d8ebeb",
  red: "#ebd9d8",
  green: "#ddebd8",
};

const KanbanColumn: React.FC<IProps> = (props) => {
  const { title, variant = "blue", tasks, ...rest } = props;

  const color = useMemo(() => baseColors[variant], [variant]);

  return (
    <ContainerKanbanColumn color={color} {...rest}>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>

        <Badge color={color}>{tasks.length}</Badge>
      </Header>

      <TasksList>
        {tasks.map((task) => (
          <TaskListItem key={task._id} color={color} task={task} />
        ))}
      </TasksList>
    </ContainerKanbanColumn>
  );
};

export default KanbanColumn;
