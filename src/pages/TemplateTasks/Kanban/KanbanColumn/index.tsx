import React, { useMemo, useState } from "react";
import { ContainerKanbanColumn, Header, HeaderTitle, AddIcon, Badge, TasksList } from "./styles";
import { useTemplateContext } from "../../../../contexts/templates";
import TaskListItem from "../TaskListItem";
import FormCreateTask from "../FormAddTask";
import { HiOutlinePlus } from "react-icons/hi";
import { capitalizeText } from "../../../../utils";
import { ITask, ITaskStatus, IUpdateTaskPayload } from "../../../../types/task";

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

  const { updateTask } = useTemplateContext();
  const [isCreating, setIsCreating] = useState(false);
  const [taskForm, setTaskForm] = useState<IUpdateTaskPayload>({
    _id: "",
    name: "",
    status: "to do",
  });
  const color = useMemo(() => baseColors[variant], [variant]);

  async function handleUpdateTask() {
    if (!taskForm._id) return;

    try {
      await updateTask(taskForm);
      setTaskForm((prev) => ({ ...prev, name: "", _id: "" }));
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <ContainerKanbanColumn color={color} {...rest}>
      <Header>
        <HeaderTitle>{title ? title : capitalizeText(status)}</HeaderTitle>

        <AddIcon
          icon={<HiOutlinePlus />}
          hoverBgColor={color}
          onClick={() => setIsCreating((prev) => !prev)}
        />
        <Badge color={color}>{tasks.length}</Badge>
      </Header>

      <FormCreateTask
        visibility={isCreating}
        templateId={templateId}
        status={status}
        hideForm={() => setIsCreating(false)}
      />

      <TasksList>
        {tasks.map((task) => (
          <TaskListItem key={task._id} color={color} task={task} />
        ))}
      </TasksList>
    </ContainerKanbanColumn>
  );
};

export default KanbanColumn;
