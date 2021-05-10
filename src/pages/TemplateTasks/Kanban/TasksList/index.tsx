import React from "react";
import { ContainerList, TaskItem, Text } from "./styles";
import store from "../../../../store";
import { Popover } from "../../../../components/ui";
import { HiDotsHorizontal } from "react-icons/hi";
import { ITask, ITaskStatus } from "../../../../types/task";
import { moveTask } from "../../../../utils";

interface IProps {
  tasks: ITask[];
  status: ITaskStatus;
  color: string;
  openModalEdit: (task: ITask) => void;
}

type IDragEvent = React.DragEvent<HTMLUListElement | HTMLLIElement>;

const TasksList: React.FC<IProps> = (props) => {
  const { tasks, openModalEdit, status, ...rest } = props;
  const { templateStore } = store;

  async function handleDeleteTask(taskId: string) {
    try {
      await templateStore.deleteTask({ taskId });
    } catch (error) {
      alert(error.message);
    }
  }

  function pickupTask(e: IDragEvent, taskId: string) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("task-id", taskId);
  }

  async function handleMoveTask(e: IDragEvent, taskIdTo?: string) {
    try {
      await moveTask(e, { taskIdTo, status });
    } catch (error) {
      alert(error?.response?.data || error?.message);
    }
  }

  return (
    <ContainerList>
      {tasks.map((task) => (
        <TaskItem
          onDrop={(e) => handleMoveTask(e, task._id)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          draggable
          onDragStart={(e) => pickupTask(e, task._id)}
          key={task._id}
          {...rest}
        >
          <Text> {task.name}</Text>

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
