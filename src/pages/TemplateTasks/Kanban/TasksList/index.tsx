import React from "react";
import { ContainerList, TaskItem, Text } from "./styles";
import store from "../../../../store";
import { Popover } from "../../../../components/ui";
import { HiDotsHorizontal } from "react-icons/hi";
import { ITask, ITaskStatus } from "../../../../types/task";

interface IProps {
  tasks: ITask[];
  status: ITaskStatus;
  color: string;
  openModalEdit: (task: ITask) => void;
}

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

  function pickupTask(e: React.DragEvent<HTMLLIElement>, task: ITask) {
    console.log(e, task);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("task-id", task._id);
  }

  function moveTask(e: React.DragEvent<HTMLUListElement>) {
    const taskId = e.dataTransfer.getData("task-id");
    const taskToMove = templateStore.currentTemplate?.tasks.find((task) => task._id === taskId);

    if (taskToMove) {
      taskToMove.status = status;
      templateStore.updateTask(taskToMove);
    }
  }

  return (
    <ContainerList
      onDrop={moveTask}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => e.preventDefault()}
    >
      {tasks.map((task) => (
        <TaskItem draggable onDragStart={(e) => pickupTask(e, task)} key={task._id} {...rest}>
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
