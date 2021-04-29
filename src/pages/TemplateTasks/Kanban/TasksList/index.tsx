import React from "react";
import { ContainerList, TaskItem, Text } from "./styles";
import { useTaskContext } from "../../../../contexts/tasks";
import { Popover } from "../../../../components/ui";
import { HiDotsHorizontal } from "react-icons/hi";
import { ITask } from "../../../../types/task";

interface IProps {
  tasks: ITask[];
  color: string;
  openModalEdit: (task: ITask) => void;
}

const TasksList: React.FC<IProps> = (props) => {
  const { tasks, openModalEdit, ...rest } = props;

  const { deleteTask } = useTaskContext();

  async function handleDeleteTask(taskId: string) {
    try {
      await deleteTask({ taskId });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <ContainerList>
      {tasks.map((task) => (
        <TaskItem key={task._id} {...rest}>
          <Text>{task.name}</Text>

          <Popover
            className="popover"
            position="left"
            content={<HiDotsHorizontal />}
            options={[
              {
                content: "Edit",
                onClick: () => openModalEdit(task),
              },
              {
                content: "Delete",
                onClick: () => handleDeleteTask(task._id),
              },
            ]}
          />
        </TaskItem>
      ))}
    </ContainerList>
  );
};

export default TasksList;
