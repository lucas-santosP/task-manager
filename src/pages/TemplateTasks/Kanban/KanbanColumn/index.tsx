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
import { ITask, ITaskStatus, ICreateTaskPayload } from "../../../../types/task";
import { capitalizeText } from "../../../../utils";
import { useTemplateContext } from "../../../../contexts/templates";

type IVariant = "blue" | "green" | "red";

interface IProps {
  title?: string;
  variant?: IVariant;
  status: ITaskStatus;
  templateId: string;
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
  const { title, status, variant = "blue", tasks, templateId, ...rest } = props;

  const { createTask } = useTemplateContext();
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState<ICreateTaskPayload>({
    name: "",
    status,
    templateId,
  });

  async function handleCreateTask() {
    if (!newTask.name) return;

    await createTask(newTask);
    setNewTask((prev) => ({ ...prev, name: "" }));
  }

  const color = useMemo(() => baseColors[variant], [variant]);

  return (
    <ContainerKanbanColumn color={color} {...rest}>
      <Header>
        <HeaderTitle>{title ? title : capitalizeText(status)}</HeaderTitle>

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
            onChange={(e) => setNewTask((prev) => ({ ...prev, name: e.target.value }))}
            value={newTask.name}
            marginBottom={0.5}
            autoResizeY
            focused
          />
          <div className="btn-group">
            <Button size="sm" rounded="low" variant="gray" onClick={() => setIsAdding(false)}>
              Cancel
            </Button>
            <Button size="sm" rounded="low" onClick={handleCreateTask}>
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
