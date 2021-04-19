import React, { useMemo, useState } from "react";
import {
  ContainerKanbanColumn,
  Header,
  HeaderTitle,
  AddIcon,
  Badge,
  TasksList,
  ContainerAddTask,
} from "./styles";
import TaskListItem from "../TaskListItem";
import { Button, TextArea } from "../../../../components/ui";
import { HiOutlinePlus } from "react-icons/hi";
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
  red: "#ebd9d8",
  blue: "#d0ebeb",
  green: "#ddebd8",
};

const KanbanColumn: React.FC<IProps> = (props) => {
  const { title, variant = "blue", tasks, ...rest } = props;

  const [isAdding, setIsAdding] = useState(false);
  const color = useMemo(() => baseColors[variant], [variant]);

  return (
    <ContainerKanbanColumn color={color} {...rest}>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>

        <AddIcon
          icon={<HiOutlinePlus />}
          hoverBgColor={color}
          onClick={() => setIsAdding((prev) => !prev)}
        />
        <Badge color={color}>{tasks.length}</Badge>
      </Header>

      {isAdding && (
        <ContainerAddTask>
          <TextArea
            rows={2}
            placeholder="Enter a task"
            onChange={() => console.log("!!")}
            marginBottom={0.5}
            autoResizeY
            focused
          />
          <div className="btn-group">
            <Button size="sm" rounded="low" variant="gray" onClick={() => setIsAdding(false)}>
              Cancel
            </Button>
            <Button size="sm" rounded="low">
              Add
            </Button>
          </div>
        </ContainerAddTask>
      )}

      <TasksList>
        {tasks.map((task) => (
          <TaskListItem key={task._id} color={color} task={task} />
        ))}
      </TasksList>
    </ContainerKanbanColumn>
  );
};

export default KanbanColumn;
